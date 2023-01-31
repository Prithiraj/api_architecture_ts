# TODO: SELECT statements

# 1. Use LEFT JOIN. For tables with multiple occurence use unique keys/aliases
# Foreign key props to be called from the custom.json:
# e.g. 
# fk = [
# 	{
# 		fk_col: "current_loan_id",
# 		fk_table: "loan",
# 		fk_pk: "id",
# 		fk_aliase: "current_loan_id_loan"
# 	},
# ]
	
# RULES for naming aliases:
# 1. If "id" exists in the fk_id remove it.
# 2. If "id" is not in the fk_id



# 2. Make rules for the table filters:
# a) For number use min/max
# b) For date fields use from, to.
# c) For countries/localities use arrays
# d) For names and other strings it should be equals.

import copy
import chevron
import json
from marshmallow import Schema, fields, post_load, pre_load


from utils.utilities import create_directory, delete_files_from_directory, to_camel_case

class FkInfoSchema(Schema):
    fk_col = fields.String(required = True)
    fk_table = fields.String(required = True)
    fk_pk = fields.String(required = True)
    fk_alias = fields.Raw(required = True)
    
    @post_load
    def make_fk_Info(self, data, **kwargs):
        return FkInfo(**data)
    
class FkInfo:
    def __init__(self, fk_col, fk_table, fk_pk, fk_alias):
        self.fk_col = fk_col
        self.fk_table = fk_table
        self.fk_pk = fk_pk
        self.fk_alias = fk_alias
        
class FkInfoListSchema(Schema):
    fk_info_list = fields.List(fields.Nested(FkInfoSchema))
    
    @post_load
    def make_fk_info_list(self, data, **kwargs):
        return FkInfoList(**data)
    
class FkInfoList:
    def __init__(self, fk_info_list):
        self.fk_info_list = fk_info_list

class SingleSelectTypescriptGen:
    
    def __init__(self):
        pass
    
    def _getIDandDBNameOfTable(self, api_table_name, select_schemas):
        for select_schema in select_schemas["schemas"]:
            if select_schema["apitablename"] == api_table_name:
                db_table_name = select_schema["dbtablename"]
                pk = [x["dbcolname"] for x in select_schema["columnInfoList"] if x["primarykey"]=='t']
                return {
                    "db_table_name": db_table_name,
                    "id": pk[0] if len(pk) > 0 else "id"
                }
        return {
            "db_table_name": api_table_name,
            "id:":"id"
        }
    
    def _preprocess(self, select_schemas):
        
        for select_schema in select_schemas["schemas"]:
            columns_from = select_schema["columnInfoList"]
            fk_info_list = []
            fk_alias_list = []
            pk = [x["apicolname"] for x in columns_from if x["primarykey"]=='t']
            select_schema['primarykey'] = pk[0] if len(pk) > 0 else "id"
            
            for column in columns_from: 
                if bool(column["foreignkey"]) == True:
                    data = self._getIDandDBNameOfTable(column["foreignkey"], select_schemas)
                    fk_alias = to_camel_case(column["dbcolname"]+data["db_table_name"])
                    fk_alias_list.append(fk_alias)
                    fk_info_list.append(
						{
							"fk_col": column["dbcolname"],
							"fk_table": data["db_table_name"],
							"fk_pk": data["id"],
							"fk_alias": fk_alias
						}
					)

            select_schema["fk_alias_list"] = fk_alias_list
            
            if bool(fk_info_list) is True:
                schema_obj = FkInfoListSchema().load({"fk_info_list":fk_info_list})
                json_schema = FkInfoListSchema().dump(schema_obj)
                select_schema["fk_info_list"] = json_schema["fk_info_list"]
            else:
                select_schema["fk_info_list"] = []

    def _genSelectMarkDown(self, update_schemas, doc_directory):
        delete_files_from_directory([doc_directory])
        create_directory([doc_directory])
        with open('templates/docs/doc_select.mustache', 'r') as mdf:
            data = chevron.render(mdf, update_schemas)
            
            with open(f'{doc_directory}/doc_select.md', 'w') as mwf:
                mwf.write(data)
                
    def _genSelectByIdQueryTypescript(self, select_schemas, template_filepath, destination_directory, destination_filename_suffix, message=None):
        delete_files_from_directory([destination_directory])
        create_directory([destination_directory])
        for select_schema in select_schemas["schemas"]:
            with open(template_filepath, 'r') as f:
                data = chevron.render(f, select_schema)
                
                with open(f'{destination_directory}/{select_schema["apitablename"]}.{destination_filename_suffix}.ts', 'w') as dfq:
                    dfq.write(data)

        if bool(message) == True:
            print(message)
        
    def generateTypescriptSelectByIDQueries(self, schemas):
        
        # 1. make a deepcopy of the select statement
        select_schemas = copy.deepcopy(schemas)
        
        # 2. preprocess the schema
        self._preprocess(select_schemas)
        
        # 3. Generate code from template files.
        self._genSelectByIdQueryTypescript(select_schemas, "templates/general/db_select_sl.mustache", 
                                   "webserver/src/dbmanager/db_select_sl/general", "selectByID", "printed select queries")
        
        # 4. Generate code from template files for admin cases.
        self._genSelectByIdQueryTypescript(select_schemas, "templates/admin/db_select_sl.mustache", 
                                           "webserver/src/dbmanager/db_select_sl/admin", "selectByID", "printed admin select queries")
        
        accepted_names = ['theme', 'contactlifecycle', 'persons', 'loleadsource', 'eventtype', 'user', 'workflow', 'workflowstate', 'engagement', 'contacttag', 'eventsv2', 'contactstatus', 'events', 'property', 'organization', 'loan', 'losubscription', 'loleadraw', 'losubscriptiondailystats', 'contactcustomfield', 'lolead', 'template', 'element', 'page', 'contact', 'activitylog', 'contactreminder', 'contactotherassociates', 'contactcomment']
        select_schemas["schemas"] = [x for x in select_schemas["schemas"] if bool(x["primarykey"]) is True and x["apitablename"].lower() in accepted_names]
        self._genSelectMarkDown(select_schemas, doc_directory="webserver/src/doc/get")


             