from marshmallow import fields, Schema, post_load, pre_load
import json

class AjvProps:
    def __init__(self, type, format, enum, _not):
        self.type = type
        self.format = format
        self.enum = enum
        self._not = _not
        
class AjvPropsSchema(Schema):
    type = fields.String()
    format = fields.String()
    enum = fields.String()
    _not = fields.Raw()
    
    @pre_load
    def preload(self, data, many, **kwargs):
        
        if 'type' in data and bool(data['type']) is False:
            del data['type']
        if 'format' in data and bool(data['format']) is False:
            del data['format']
        if 'enum' in data and bool(data['enum']) is False:
            del data['enum']
        if '_not' in data and bool(data['_not']) is False:
            del data['_not']

        return data

if __name__ == "__main__":
    
    cols = {

    }
    
    schema = AjvPropsSchema()
    print(json.dumps(schema.load(cols)))
    
    