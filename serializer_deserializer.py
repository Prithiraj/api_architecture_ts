# from get_table_info import ColumnInfo, ColumnInfoList, ColumnInfoListSchema, ColumnInfoSchema
from pyschemas.generator.tables import ColumnInfo, ColumnInfoList, ColumnInfoListSchema

class SerializerDeserializer:
    
    def __init__(self):
        pass
    
    @staticmethod
    def deserialize_column_info(cols):
        schema = ColumnInfoListSchema()
        data = schema.dump(cols)
        # print(data)
        return data
        # for col in cols:
        #     with open('dbmapper.ts', 'w') as f:
    @staticmethod 
    def get_deserialized_schema(tables, table_items):
        schemas = []
        for tablename in tables:
            table_info = []
            fk_list = []
            for item in table_items:
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
                    # table_items.remove(item)
            columnInfoList = ColumnInfoList(table_info, fk_list, tablename)
            schema = SerializerDeserializer.deserialize_column_info(columnInfoList)
            schemas.append(schema) 
        return schemas            