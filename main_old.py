import sys
from serializer_deserializer import SerializerDeserializer 
from get_table_info import TableInfo
from sort_schema import SortSchema
from typescript_gen import TypescriptGen
import json

if __name__=="__main__":
    schemaname = 'public'
    tableInfo = TableInfo(schemaname)
    tables = tableInfo.get_tables()
    columns = []
    schemas = []
    
    for table in tables:
        colInfoList = tableInfo.get_table_info(table, schemaname)
        schema = SerializerDeserializer.deserialize_column_info(colInfoList)
        schemas.append(schema)
        # i += 1
        # if i == 6:
        #     break
    sortSchema = SortSchema()
    sorted_schema = sortSchema.sortSchema(schemas)
    with open('schema.json', 'w') as f:
        f.write(json.dumps(sorted_schema))
    
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(sorted_schema)
	

        
    