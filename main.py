import json
import os
from pyschemas.editor.comparer import Comparer
from pyschemas.generator.tables import DataTableSchemas, DataTable
from serializer_deserializer import SerializerDeserializer
from get_table_info import TableInfo
from sort_schema import SortSchema
from typescript_gen import TypescriptGen


if __name__ == "__main__":
    tableInfo = TableInfo('public')
    tables = tableInfo.get_tables('public')
    items = TableInfo.get_all_table_info('public')

    schemas = SerializerDeserializer.get_deserialized_schema(tables, items)
    
    # 1. Build schema objects for sorted_schema
    # sorted_schema
    # 2. Build schema objects for saved schema
    
    isFile = os.path.isfile('jsons/custom_json/custom.json')
    if isFile is False:
        with open('jsons/custom_json/custom.json', 'w') as f:
            f.write(json.dumps({"schemas":[]})) 
    
    with open('jsons/custom_json/custom.json', 'r') as f:
        data = json.load(f)
    
    new_schema = Comparer().compareAndUpdate(schemas, data)
    # dataTable = dataTable(sorted_schema)
    
    sortSchema = SortSchema()
    sorted_schema = sortSchema.sortSchema(schemas)
    
    with open('jsons/test_json/schema.json', 'w') as f:
        f.write(json.dumps(sorted_schema))	
    
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(sorted_schema)
    print(json.dumps(sorted_schema))
