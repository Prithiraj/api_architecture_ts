from json import load

class Comparer:
    def __init__(self):
        pass
    
    def getNewTableNames(self, db_schemas, custom_schemas):
        db_column_name_set = set([x["dbtablename"] for x in db_schemas])
        db_custom_name_set = set([x["dbtablename"] for x in custom_schemas])
        
        return list(db_column_name_set.difference(db_custom_name_set))
    
    def getNewColNames(self, table_name, db_schemas, custom_schemas):
        db_table_dict = set([x["dbcolname"] for x in db_schemas if x["dbtablename"] == table_name][0]["columnInfoList"])
        custom_table_dict = set([x["dbcolname"] for x in custom_schemas if x["dbtablename"] == table_name][0]["columnInfoList"])
        
        return list(db_table_dict.difference(custom_table_dict))
    
    def compareAndUpdate(self, db_schemas, custom_schema):
        
        # db_schemas = db_schema["schemas"]
        custom_schemas = custom_schema["schemas"]
        
        # If a column is present on the newly created json, add the schema to the customized version.
        
        # 1. If a table is present on the newly created json, add the schema to the customized version.
        new_table_names = self.getNewTableNames(db_schemas, custom_schemas)
        for table_name in new_table_names:
            custom_schemas.append([x for x in db_schemas if x["dbtablename"] == table_name][0])

        
        return custom_schema
            
        

if __name__ == '__main__':
    with open('schema.json', 'r') as f:
        db_schema = load(f)
        
    with open('jsons/custom_json/custom.json', 'r') as f:
        custom_schema = load(f)
    
    Comparer().compareAndUpdate(db_schema, custom_schema)