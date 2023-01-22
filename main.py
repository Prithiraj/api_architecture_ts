import json
import os
import copy
from json_modifier.json_update_modifier import JsonUpdateModifier
from markdown_gen import MarkdownGen
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
    
    # ToDO: get rid of the below code once the SQL is fixed
    # tables.remove('workflow')
    
    tables_str = "','".join(tables)
    table_str = "'" + tables_str.strip(',') + "'"
    # print(table_str)

    items = TableInfo.get_all_table_info('public', table_str)

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
    markdownGen = MarkdownGen()
    typescriptGen.genMapperTypeScript(sorted_schema)

    # insert schema generation
    insert_schema = JsonInsertModifier().removeExcludedColumns(copy.deepcopy(sorted_schema))
    typescriptGen.genInsertTypeScript(insert_schema)
    # insert_schema = JsonInsertModifier().minimizeTableName(insert_schema)
    # markdownGen.genInsertMD(insert_schema)

    # update schema generation
    update_schema = JsonUpdateModifier().removeExcludedColumns(copy.deepcopy(sorted_schema))
    typescriptGen.genUpdateTypeScript(update_schema)

    # insert db query generation
    typescriptGen.genInsertQueryTypescript(sorted_schema)
    
    # insert db query generation for lambda
    typescriptGen.genInsertQueryLambdaTypescript(sorted_schema)

    # insert lambda functions
    typescriptGen.genInsertLambdaFunction(sorted_schema)

    # insert lambda cases
    typescriptGen.genInsertLambdaCases(sorted_schema)
    