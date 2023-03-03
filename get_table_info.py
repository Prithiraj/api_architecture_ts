# import json
# from code_generatory import CodeGenerator
from connect import connect_sqlalc
from marshmallow import Schema, fields
from utils.utilities import remove_special_chars, to_camel_case, to_ajv_type
    
class TableInfo:
    def __init__(self,schemaname):
        self.tables = []
        self.schemaname = schemaname
    

    @staticmethod
    def set_pks(table_pks, db_schema):
        for schema in db_schema:
            for col in schema['columnInfoList']:
                for pk_row in table_pks:
                    if pk_row['attname'] == col['dbcolname'] and pk_row['relname'] == schema['dbtablename']:
                        col['primarykey'] = 't'
        
    @staticmethod
    def get_table_pks():
        query = ""
        with open("sqls/composite_pks.sql", "r") as f:
            query = f.read()
        
        engine = connect_sqlalc()
        print(query)
        result = ""
        with engine.connect() as connection:
            result = connection.execute(query)
        return result.fetchall()
        
        
    @staticmethod
    def get_table_names(all_table_info):
        data = set([x['columname'] for x in all_table_info])
        print(data)
        return data
    
    @staticmethod
    def get_all_table_info():
        query = ""
        with open('sqls/tables_info.sql', 'r') as f:
            query = f.read()

        engine = connect_sqlalc()
        print(query)
        result = ""
        with engine.connect() as connection:
            result = connection.execute(query)
        return result.fetchall()
    

if __name__ == "__main__":
    
    print(to_camel_case("summary_line"))   
    print(to_camel_case("_lanes")) 
    print(to_camel_case("_Hello_brot.her_good_morning"))
        