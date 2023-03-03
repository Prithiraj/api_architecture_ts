from utils.utilities import remove_special_chars, to_camel_case, to_ajv_type
from marshmallow import fields, Schema, post_load, pre_load

class ColumnInfoSchema(Schema):
    apicolname = fields.String()
    dbcolname = fields.String()
    notnull = fields.Boolean()
    type = fields.String()
    ajvtype = fields.String()
    primarykey = fields.String()
    foreignkey = fields.String()
    auto = fields.Boolean()

    @pre_load
    def make_pk(self, data, many, **kwargs):
        print(data)
    
    @post_load
    def make_column_info(self, data, **kwargs):
        # print(**data)
        return ColumnInfo(**data)

class ColumnInfoListSchema(Schema):
    columnInfoList = fields.List(fields.Nested(ColumnInfoSchema))
    fk_list = fields.List(fields.String())
    apitablename = fields.String()
    dbtablename= fields.String()
    
    @post_load
    def make_column_info_list(self, data, **kwargs):
        return ColumnInfoList(**data)

class DataTableSchemas(Schema):
    schemas = fields.List(fields.Nested(ColumnInfoListSchema))
    
    @post_load
    def make_data_table(self, data, **kwargs):
        return DataTable(**data)

class ColumnInfo:
    def __init__(self, columnname, notnull, type, primarykey, foreignkey, auto):
        self.apicolname: str = to_camel_case(columnname)
        self.dbcolname: str = columnname
        self.notnull: bool = notnull
        self.type: str = type
        self.ajvtype: str = to_ajv_type(type) 
        self.primarykey = primarykey
        self.auto = auto
        self.foreignkey = to_camel_case(foreignkey) if bool(foreignkey) else ""
        
class ColumnInfoList:
    def __init__(self, columnInfoList, fk_list, relname):
        self.columnInfoList = columnInfoList
        self.fk_list = fk_list
        self.apitablename = to_camel_case(relname)
        self.dbtablename = relname
        
class DataTable:
    def __init__(self, schemas):
        self.schemas = schemas
        

        