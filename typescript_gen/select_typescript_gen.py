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


# from utils.utilities import create_directory, delete_directory, to_camel_case

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
    
    @pre_load
    def fix_fk_info_list(self, data, many, **kwargs):
        a = data
        return a
    
    @post_load
    def make_fk_info_list(self, data, **kwargs):
        return FkInfoList(**data)
    
class FkInfoList:
    def __init__(self, fk_info_list):
        self.fk_info_list = fk_info_list

class SingSelectTypescriptGen:
    
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
            for column in columns_from: 
                if bool(column["foreignkey"]) == True:
                    data = self._getIDandDBNameOfTable(column["foreignkey"], select_schemas)
                    fk_info_list.append(
						{
							"fk_col": column["dbcolname"],
							"fk_table": data["db_table_name"],
							"fk_pk": data["id"],
							"fk_alias": column["dbcolname"] + data["db_table_name"]
						}
					)
            if bool(fk_info_list) is True:
                schema_obj = FkInfoListSchema().load({"fk_info_list":fk_info_list})
                json_schema = FkInfoListSchema().dump(schema_obj)
                select_schema["fk_info_list"] = json_schema["fk_info_list"]
            else:
                select_schema["fk_info_list"] = []
    
    def _genSelectByIdQueryTypescript(self, select_schemas):
        pass
    
    def generateTypescriptSelectByIDQueries(self, schemas):
        
        # TODO: 1. make a deepcopy of the select statement
        select_schemas = copy.deepcopy(select_schemas)
        
        # 2. preprocess the schema
        self._preprocess(select_schemas)
        

if __name__ == "__main__":
    with open("jsons/custom_json/custom.json", "r") as f:
        d = json.load(f)
        singleSelect = SingSelectTypescriptGen()
        singleSelect._preprocess(d)
        
        