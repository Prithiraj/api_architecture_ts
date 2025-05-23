from marshmallow import Schema, fields


class AjvInsertSchema(Schema):
    required = fields.List(fields.String())
    exclude = fields.List(fields.String())
    additional_properties = fields.Bool()

class AjvUpdateSchema(Schema):
    exclude = fields.List(fields.String())
    additional_properties = fields.Bool()

class AjvDeleteSchema(Schema):
    pass

class AjvQuerySchema(Schema):
    pass

class AjvInsert:
    def __init__(self, required: list=[], exclude: list=[], additional_properties: bool=False) -> None:
        self.required = required
        self.exclude = exclude
        self.additional_properties = additional_properties

class AjvUpdate:
    def __init__(self, exclude: list=[], additional_properties: bool=False):
        self.exclude = exclude
        self.additional_properties = additional_properties

class AjvDelete:
    pass

class AjvQuery:
    pass