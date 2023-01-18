class JsonUpdateModifier:
    def __init__(self):
        pass
    def preloadColumnInfoSchemaList(self, data, schema_level_rules):
        # fk_list = []
        
        if "ajv_update" not in data:
            ajv_update = {
            } 
            data["ajv_update"] = ajv_update
        
        if "additional_properties" not in data["ajv_update"]:
            data["ajv_update"]["additional_properties"] = False

        if "exclude" not in data["ajv_update"]:
            data["ajv_update"]["exclude"] = []
            data["ajv_update"]["exclude"].extend(schema_level_rules["insert"]["exclude"]["system"])
            data["ajv_update"]["exclude"].extend(schema_level_rules["insert"]["exclude"]["dependency"])
        
        # if "required" not in data["ajv_update"]:
        #     data["ajv_update"]["required"]=[]

        # for field in data["columnInfoList"]:
            # if bool(field["foreignkey"]):
            #     fk_list.append(field["foreignkey"])
                
            # if (schema_level_rules["insert"]["exclude"]["primaryKey"]==True and field["primarykey"]=='t'):
            #     data["ajv_update"]["exclude"].append(field["apicolname"])
            
            # if (field["notnull"] is True and field["apicolname"] not in data["ajv_update"]["exclude"]):
            #     data["ajv_update"]["required"].append(field["apicolname"])
        
        data["ajv_update"]["exclude"] = list(set(data["ajv_update"]["exclude"]))
        # data["ajv_update"]["required"] = list(set(data["ajv_update"]["required"]))

        # ajv_update = {}
        # ajv_delete = {}
        # ajv_query = {}
         
        # data["ajv_update"] = ajv_update
        # data["fk_list"] = fk_list

        # data["ajv_delete"] = ajv_delete
        # data["ajv_query"] = ajv_query
        return data 
    def removeExcludedColumns(self, json_dict):
        
        for schema in json_dict['schemas']:
            columns_to_remove = schema['ajv_update']['exclude']
            columns_from = schema['columnInfoList']
            
            schema['columnInfoList'] = [x for x in columns_from if x['apicolname'] not in columns_to_remove]
            
            if "id" not in columns_to_remove:
                columns_to_remove.append("id")
            schema['columnInfoListAnyOf'] = [x for x in columns_from if x['apicolname'] not in columns_to_remove]
        
        return json_dict
        