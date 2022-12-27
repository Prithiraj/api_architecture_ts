# from get_table_info import ColumnInfoListSchema, ColumnInfoSchema
from pyschemas.generator.tables import ColumnInfoListSchema

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
                