import json
from pyschemas.editor.ajvtables import DataTableSchemas
from json_modifier.json_insert_modifier import JsonInsertModifier

def TestEditorSchema():
    data = ""
    with open('/Users/nime/clients/taygo/dbschema/jsons/custom_json/custom.json', 'r') as jsf:
        data = json.load(jsf)
        
    print(type(data))
    data_obj = DataTableSchemas().load(data)
    item = DataTableSchemas().dumps(data_obj)
    # print(item)

def TestRemoveExcluded():
    data = ""
    with open('/Users/nime/clients/taygo/dbschema/jsons/custom_json/custom.json', 'r') as jsf:
        data = json.load(jsf)
        
    jim = JsonInsertModifier()
    data = jim.removeExcludedColumns(data)
    print(json.dumps(data, indent=2))    

if __name__ == '__main__': 
    data = ""
    with open('/Users/nime/clients/taygo/dbschema/jsons/custom_json/custom.json', 'r') as jsf:
        data = json.load(jsf)
    
    list_of_endpoints = []
    for schema in data["schemas"]:
        list_of_endpoints.append(schema["apitablename"].lower())
        
    end_points = ",\n".join(list_of_endpoints)
    print(end_points)
        