class JsonInsertModifier:
    def __init__(self):
        pass
    
    def preloadColumnInfoSchemaList(self, data, schema_level_rules):
        fk_list = []
        
        if "ajv_insert" not in data:
            ajv_insert = {
            } 
            data["ajv_insert"] = ajv_insert
        
        if "additional_properties" not in data["ajv_insert"]:
            data["ajv_insert"]["additional_properties"] = False

        if "exclude" not in data["ajv_insert"]:
            data["ajv_insert"]["exclude"] = []
            data["ajv_insert"]["exclude"].extend(schema_level_rules["insert"]["exclude"]["system"])
            data["ajv_insert"]["exclude"].extend(schema_level_rules["insert"]["exclude"]["dependency"])
        
        if "required" not in data["ajv_insert"]:
            data["ajv_insert"]["required"]=[]

        for field in data["columnInfoList"]:
            if bool(field["foreignkey"]):
                fk_list.append(field["foreignkey"])
                
            if (schema_level_rules["insert"]["exclude"]["primaryKey"]==True and field["primarykey"]=='t'):
                data["ajv_insert"]["exclude"].append(field["apicolname"])
            
            if (field["notnull"] is True and field["apicolname"] not in data["ajv_insert"]["exclude"]):
                data["ajv_insert"]["required"].append(field["apicolname"])
        
        # DESC: for both excluded and required, 
        # check if the fields are existing in the ColumnInfoList. 
        # Delete all non existent columns from the excluded and required fields
        
        # Steps:
        # 1. Get the set of columns from the colinfolist. 
        colInfoSet = set([x["apicolname"] for x in data["columnInfoList"]])
        
        # 2. Get the difference from the sets in the excluded and required.
        colInfoExcludedSet = set(data["ajv_insert"]["exclude"]) 
        colInfoRequiredSet = set(data["ajv_insert"]["required"])
        
        # 3. Remove the columns from the excluded and required fields.
        colInfoExcludedSet.difference_update(colInfoExcludedSet.difference(colInfoSet))
        colInfoRequiredSet.difference_update(colInfoRequiredSet.difference(colInfoSet))
        
        
        data["ajv_insert"]["exclude"] = list(colInfoExcludedSet)
        data["ajv_insert"]["required"] = list(colInfoRequiredSet)

        ajv_delete = {}
        ajv_query = {}
         
        # data["ajv_insert"] = ajv_insert
        data["fk_list"] = fk_list

        # data["ajv_update"] = ajv_update
        data["ajv_delete"] = ajv_delete
        data["ajv_query"] = ajv_query
        return data 
    
    def removeExcludedColumns(self, json_dict):
        
        for schema in json_dict['schemas']:
            columns_to_remove = schema['ajv_insert']['exclude']
            columns_from = schema['columnInfoList']
            
            schema['columnInfoList'] = [x for x in columns_from if x['apicolname'] not in columns_to_remove]
        
        return json_dict 
    
    def minimizeTableName(self, json_dict):
        for schema in json_dict['schemas']:
            table_name = schema['apitablename'].lower()
            
            schema['apitablename'] = table_name
            
        return json_dict
        
    
    