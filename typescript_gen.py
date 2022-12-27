import chevron
import json

class TypescriptGen:
    def __init__(self):
        pass
    
    def genTypeScript(self, schemas):
        with open('templates/template.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open('schemas/mapper.ts', 'w') as tsf:
                tsf.write(data)
                
        with open('templates/ajv_type.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open('schemas/mapper_ajv.ts', 'w') as tsf:
                tsf.write(data)
        
        for schema in schemas["schemas"]:
            # print(schema)
            with open('templates/ajv_create.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open('schemas/ajv_schemas_create/'+schema["apitablename"]+'.ts', 'w') as tsf:
                    tsf.write(data)
                    
            with open('templates/ajv_update.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open('schemas/ajv_schemas_update/'+schema["apitablename"]+'.ts', 'w') as tsf:
                    tsf.write(data)
            

if __name__ == "__main__":
    data = ""
    with open('schema.json', 'r') as jsf:
        data = json.loads(jsf.read())
        
        data = {"schemas":data}
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(data)
    