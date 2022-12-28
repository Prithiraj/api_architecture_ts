from json import load

class Comparer:
    def __init__(self):
        pass
    
    def getNewTableNames(self, db_schemas, custom_schemas):
        db_table_name_set = set([x["dbtablename"] for x in db_schemas])
        custom_table_name_set = set([x["dbtablename"] for x in custom_schemas])
        
        return list(db_table_name_set.difference(custom_table_name_set))
    
    def getNewColNames(self, db_col_info_list, custom_col_info_list):
        db_table_dict = set([x["dbcolname"] for x in db_col_info_list])
        custom_table_dict = set([x["dbcolname"] for x in custom_col_info_list])
        
        return list(db_table_dict.difference(custom_table_dict))
    
    def compareAndUpdate(self, db_schemas, custom_schema):
        
        # db_schemas = db_schema["schemas"]
        custom_schemas = custom_schema["schemas"]
        
        # 1. If a table is present on the newly created json, add the schema to the customized version.
        new_table_names = self.getNewTableNames(db_schemas, custom_schemas)
        for table_name in new_table_names:
            custom_schemas.append([x for x in db_schemas if x["dbtablename"] == table_name][0])
        
        # If a column is present on the newly created json, add the schema to the customized version.
        # Finally override Foreign Key fk_list list for sorting based on dependeny
        for table_info in db_schemas:
            db_column_info_list = table_info["columnInfoList"]
            custom_column_info_list = [x["columnInfoList"] for x in custom_schemas if x["dbtablename"] == table_info["dbtablename"]][0]
            
            new_col_names = self.getNewColNames(db_column_info_list, custom_column_info_list)
            
            cols = []
            for col_name in new_col_names:
                cols.append([x for x in db_column_info_list if x["dbcolname"]==col_name][0])
                
            for schema in custom_schemas:
                if schema["dbtablename"] == table_info["dbtablename"]:
                    schema["columnInfoList"].extend(cols)
                    schema["fk_list"] = table_info["fk_list"]
                    
                    del table_info
                    break

        return custom_schema
            
if __name__ == '__main__':
    with open('schema.json', 'r') as f:
        db_schema = load(f)
        
    with open('jsons/custom_json/custom.json', 'r') as f:
        custom_schema = load(f)
    
    Comparer().compareAndUpdate(db_schema, custom_schema)