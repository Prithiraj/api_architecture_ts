import json
import os
import copy
from pyschemas.editor.ajvtables import DataTableSchemas
from pyschemas.editor.comparer import Comparer
from serializer_deserializer import SerializerDeserializer
from json_modifier.json_insert_modifier import JsonInsertModifier

from get_table_info import TableInfo
from sort_schema import SortSchema
from typescript_gen import TypescriptGen


if __name__ == "__main__":
    tableInfo = TableInfo('public')
    tables = tableInfo.get_tables('public')
    items = TableInfo.get_all_table_info('public')

    db_schema = SerializerDeserializer.get_deserialized_schema(tables, items)
    
    # 1. Build schema objects for sorted_schema
    # sorted_schema
    # 2. Build schema objects for saved schema
    
    isFile = os.path.isfile('jsons/custom_json/custom.json')
    if isFile is False:
        with open('jsons/custom_json/custom.json', 'w') as f:
            f.write(json.dumps({"schemas":[]}, indent=4)) 
    
    with open('jsons/custom_json/custom.json', 'r') as f:
        custom_schema = json.load(f)["schemas"]
    
    new_schemas = Comparer(db_schema, custom_schema).compareAndUpdate(db_schema, custom_schema)
    # dataTable = dataTable(sorted_schema)
    
    sortSchema = SortSchema()
    sorted_schema = sortSchema.sortSchema(new_schemas)
    
    sorted_schema_obj = DataTableSchemas().load(sorted_schema)
    sorted_schema = DataTableSchemas().dump(sorted_schema_obj)
    # sorted_schema = DataTableSchemas().loads(sorted_schema_obj)
    
    with open('jsons/custom_json/custom.json', 'w') as f:
        f.write(json.dumps(sorted_schema, indent=4))	
    
    typescriptGen = TypescriptGen()
    typescriptGen.genMapperTypeScript(sorted_schema)

    insert_schema = copy.deepcopy(sorted_schema)
    insert_schema = JsonInsertModifier().removeExcludedColumns(insert_schema)
    typescriptGen.genInsertTypeScript(insert_schema)

    typescriptGen.genUpdateTypeScript(sorted_schema)
    # print(json.dumps(sorted_schema))
