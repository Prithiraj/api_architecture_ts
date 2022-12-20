import json
from serializer_deserializer import SerializerDeserializer
from get_table_info import ColumnInfo, ColumnInfoList, TableInfo
from sort_schema import SortSchema
from typescript_gen import TypescriptGen


if __name__ == "__main__":
    tableInfo = TableInfo('public')
    tables = tableInfo.get_tables('public')
    items = TableInfo.get_all_table_info('public')
    schemas = []
    for tablename in tables:
        table_info = []
        fk_list = []
        for item in items:
            if item["columname"] == tablename:
                name = item["name"]
                notnull = item["notnullval"]
                _type = item["type"]
                primarykey = item["primarykey"]
                foreignkey = item["foreignkey"]
                colInfo = ColumnInfo(
				    name,
				    notnull,
				    _type,
				    primarykey,
				    foreignkey
			    )
                if bool(item["foreignkey"]):
                    fk_list.append(item["foreignkey"])
                table_info.append(colInfo)
                items.remove(item)
        columnInfoList = ColumnInfoList(table_info, fk_list, tablename)
        schema = SerializerDeserializer.deserialize_column_info(columnInfoList)
        schemas.append(schema)
        
    sortSchema = SortSchema()
    sorted_schema = sortSchema.sortSchema(schemas)
    
    with open('schema.json', 'w') as f:
        f.write(json.dumps(sorted_schema))	
    
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(sorted_schema)
