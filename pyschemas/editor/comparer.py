from json import load

from utils.utilities import remove_dict, set_difference

class Comparer:
    def __init__(self, db_schema, custom_schema):
        self.db_schema = db_schema
        self.custom_schema = custom_schema
        
        self.db_table_name_set = set([x["dbtablename"] for x in self.db_schema])
        self.custom_table_name_set = set([x["dbtablename"] for x in self.custom_schema])
        # self.new_table_name_set = list(self.db_table_name_set.difference(self.custom_table_name_set))
        
        self.new_table_names:list = self._getNewTableNames()
        self.deleted_table_names: list = self._getDeletedTableNames()
        
    def _getNewTableNames(self):
        
        return list(self.db_table_name_set.difference(self.custom_table_name_set))
    
    def _getDeletedTableNames(self):
        
        return list(self.custom_table_name_set.difference(self.db_table_name_set))

    def _getNewColNames(self, db_column_set, custom_column_set):
        
        return set_difference(db_column_set, custom_column_set) 
    
    def _getDeletedColNames(self, db_column_set, custom_column_set):
        
        return set_difference(custom_column_set, db_column_set)
    
    def compareAndUpdate(self, db_schema, custom_schema):
        
        # 1. If a table is present on the newly created json, add the schema to the customized version.
        # then add the table to the customized version
        for table_name in self.new_table_names:
            custom_schema.append([x for x in db_schema if x["dbtablename"] == table_name][0])
        
        # 2. If a table is not present in the newly created json but exists in the customized version.
        # then delete the table from the customized version
        custom_schema = [x for x in custom_schema if remove_dict(x, "dbtablename", self.deleted_table_names)]

        # If a column is present on the newly created json, add the schema to the customized version.
        # Finally override Foreign Key fk_list list for sorting based on dependeny
        for table_info in db_schema:
            db_column_info_list = table_info["columnInfoList"]
            custom_column_info_list = [x["columnInfoList"] for x in custom_schema if x["dbtablename"] == table_info["dbtablename"]][0]
            
            db_column_set = set([x["dbcolname"] for x in db_column_info_list])
            custom_column_set = set([x["dbcolname"] for x in custom_column_info_list])
  
            new_col_names = self._getNewColNames(db_column_set, custom_column_set)
            deleted_col_names = self._getDeletedColNames(db_column_set, custom_column_set)
            
            # Appends new columns if new column is found in the db_schema
            cols = []
            for col_name in new_col_names:
                cols.append([x for x in db_column_info_list if x["dbcolname"]==col_name][0])
                
            
            for schema in custom_schema:
                if schema["dbtablename"] == table_info["dbtablename"]:

                    # add new columns in the table to the custom json
                    schema["columnInfoList"].extend(cols)

                    # deleted columns from the database are deleted from the custom schema too
                    schema["columnInfoList"] = [x for x in schema["columnInfoList"] if remove_dict(x, "dbcolname", deleted_col_names)] 
                    schema["fk_list"] = table_info["fk_list"]
                    
                    del table_info
                    break

        return custom_schema
            
if __name__ == '__main__':
    with open('schema.json', 'r') as f:
        db_schema = load(f)
        
    with open('jsons/custom_json/custom.json', 'r') as f:
        custom_schema = load(f)["schemas"]
    
    Comparer(db_schema, custom_schema).compareAndUpdate(db_schema, custom_schema)