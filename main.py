import json
from serializer_deserializer import SerializerDeserializer
from get_table_info import ColumnInfo, ColumnInfoList, TableInfo
from sort_schema import SortSchema
from typescript_gen import TypescriptGen


if __name__ == "__main__":
    tableInfo = TableInfo('public')
    tables = tableInfo.get_tables('public')
    items = TableInfo.get_all_table_info('public')

    schemas = SerializerDeserializer.get_deserialized_schema(tables, items)
    
    sortSchema = SortSchema()
    sorted_schema = sortSchema.sortSchema(schemas)
    
    with open('schema.json', 'w') as f:
        f.write(json.dumps(sorted_schema))	
    
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(sorted_schema)
