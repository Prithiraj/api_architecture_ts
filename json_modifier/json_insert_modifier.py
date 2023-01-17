class JsonInsertModifier:
    def __init__(self):
        pass
        
    def removeExcludedColumns(self, json_dict):
        
        for schema in json_dict['schemas']:
            columns_to_remove = schema['ajv_insert']['exclude']
            columns_from = schema['columnInfoList']
            
            schema['columnInfoList'] = [x for x in columns_from if x['apicolname'] not in columns_to_remove]
        
        return json_dict 
        
    
    