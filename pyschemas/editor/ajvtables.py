from pyschemas.editor.ajvmeta import AjvDelete, AjvDeleteSchema, AjvInsert, AjvInsertSchema, AjvQuery, AjvQuerySchema, AjvUpdate, AjvUpdateSchema
from utils.utilities import remove_special_chars, to_camel_case, to_ajv_type
from marshmallow import fields, Schema, post_load

class ColumnInfoSchema(Schema):
    apicolname = fields.String()
    dbcolname = fields.String()
    notnull = fields.Boolean()
    type = fields.String()
    ajvtype = fields.String()
    primarykey = fields.String()
    foreignkey = fields.String()
    # ToDO: AJV PROPERTY 
    
    @post_load
    def make_column_info(self, data, **kwargs):
        # print(**data)
        return ColumnInfo(**data)

class ColumnInfoListSchema(Schema):
    columnInfoList = fields.List(fields.Nested(ColumnInfoSchema))
    fk_list = fields.List(fields.String())
    apitablename = fields.String()
    dbtablename= fields.String()
    ajv_insert = fields.Nested(AjvInsertSchema)
    ajv_update = fields.Nested(AjvUpdateSchema)
    ajv_delete = fields.Nested(AjvDeleteSchema)
    ajv_query = fields.Nested(AjvQuerySchema)
    
    @post_load
    def make_column_info_list(self, data, **kwargs):
        return ColumnInfoList(**data)

class DataTableSchemas(Schema):
    schemas = fields.List(fields.Nested(ColumnInfoListSchema))
    
    @post_load
    def make_data_table(self, data, **kwargs):
        return DataTable(**data)

class ColumnInfo:
    def __init__(self, apicolname, dbcolname, notnull, type, ajvtype, primarykey, foreignkey, ajv_property = {}):
        self.apicolname: str = apicolname
        self.dbcolname: str = dbcolname
        self.notnull: bool = notnull
        self.type: str = type
        self.ajvtype: str = ajvtype
        self.primarykey = primarykey
        self.foreignkey = foreignkey
        self.ajv_property = ajv_property
        
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
        
class DataTable:
    def __init__(self, schemas):
        self.schemas = schemas
        

        