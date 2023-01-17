from pyschemas.editor.ajvmeta import AjvDelete, AjvDeleteSchema, AjvInsert, AjvInsertSchema, AjvQuery, AjvQuerySchema, AjvUpdate, AjvUpdateSchema
from utils.utilities import remove_special_chars, to_camel_case, to_ajv_type
from marshmallow import fields, Schema, post_load, pre_load
import json

schema_level_rules = ""
with open('/Users/nime/clients/taygo/dbschema/jsons/schema_level.json', 'r') as f:
    schema_level_rules = json.load(f)
    
class ColumnInfoSchema(Schema):
    apicolname = fields.String()
    dbcolname = fields.String()
    notnull = fields.Boolean()
    type = fields.String()
    ajvtype = fields.String()
    primarykey = fields.String()
    foreignkey = fields.String()
    ajv_properties = fields.Raw() 
    
    @pre_load()
    def fix_data_set(self, data, many, **kwargs):
        if "ajv_properties" not in data:
            data["ajv_properties"] = {}
        
        return data
    
    @post_load
    def make_column_info(self, data, **kwargs):
        # print(**data)
        return ColumnInfo(**data)

class ColumnInfoListSchema(Schema):
    columnInfoList = fields.List(fields.Nested(ColumnInfoSchema))
    fk_list = fields.List(fields.String())
    apitablename = fields.String()
    dbtablename = fields.String()
    ajv_insert = fields.Nested(AjvInsertSchema)
    ajv_update = fields.Nested(AjvUpdateSchema)
    ajv_delete = fields.Nested(AjvDeleteSchema)
    ajv_query = fields.Nested(AjvQuerySchema)
    
    @pre_load
    def fix_data_set(self, data, many, **kwargs):
        fk_list = []
        
        if "ajv_insert" not in data:
            ajv_insert = {
            } 
            data["ajv_insert"] = ajv_insert
        
        if "additional_properties" not in data["ajv_insert"]:
            data["ajv_insert"]["additional_properties"] = False

        if "exclude" not in data["ajv_insert"]:
            data["ajv_insert"]["exclude"] = []
            data["ajv_insert"]["exclude"].extend(schema_level_rules["insert"]["exclude"]["system"])
            data["ajv_insert"]["exclude"].extend(schema_level_rules["insert"]["exclude"]["dependency"])
        
        if "required" not in data["ajv_insert"]:
            data["ajv_insert"]["required"]=[]

        for field in data["columnInfoList"]:
            if bool(field["foreignkey"]):
                fk_list.append(field["foreignkey"])
                
            if (schema_level_rules["insert"]["exclude"]["primaryKey"]==True and field["primarykey"]=='t'):
                data["ajv_insert"]["exclude"].append(field["apicolname"])
            
            if (field["notnull"] is True and field["apicolname"] not in data["ajv_insert"]["exclude"]):
                data["ajv_insert"]["required"].append(field["apicolname"])
        
        data["ajv_insert"]["exclude"] = list(set(data["ajv_insert"]["exclude"]))
        data["ajv_insert"]["required"] = list(set(data["ajv_insert"]["required"]))

        ajv_update = {}
        ajv_delete = {}
        ajv_query = {}
         
        # data["ajv_insert"] = ajv_insert
        data["fk_list"] = fk_list

        data["ajv_update"] = ajv_update
        data["ajv_delete"] = ajv_delete
        data["ajv_query"] = ajv_query
        return data
    
    @post_load
    def make_column_info_list(self, data, **kwargs):
        return ColumnInfoList(**data)

class ColumnInfo:
    def __init__(self, apicolname, dbcolname, notnull, type, ajvtype, primarykey, foreignkey, ajv_properties = {}):
        self.apicolname: str = apicolname
        self.dbcolname: str = dbcolname
        self.notnull: bool = notnull
        self.type: str = type
        self.ajvtype: str = ajvtype
        self.primarykey = primarykey
        self.foreignkey = foreignkey
        self.ajv_properties = ajv_properties
        
class ColumnInfoList:
    def __init__(self, columnInfoList, fk_list, apitablename, dbtablename, ajv_insert:AjvInsert=None, ajv_update:AjvUpdate=None, ajv_delete:AjvDelete=None, ajv_query:AjvQuery=None):
        self.columnInfoList = columnInfoList
        self.fk_list = fk_list
        self.apitablename = apitablename
        self.dbtablename = dbtablename
        self.ajv_insert = ajv_insert 
        self.ajv_update = ajv_update
        self.ajv_delete = ajv_delete
        self.ajv_query = ajv_query 
        
        
class DataTableSchemas(Schema):
    schemas = fields.List(fields.Nested(ColumnInfoListSchema))
    
    @post_load
    def make_data_table(self, data, **kwargs):
        return DataTable(**data)


class DataTable:
    def __init__(self, schemas):
        self.schemas = schemas
        

