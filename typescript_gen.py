from utils.utilities import delete_files_from_directory
import copy
import chevron
import json

class TypescriptGen:
    def __init__(self):
        self.schemas_directory = "webserver/src/schemas"
        delete_files_from_directory('schemas/ajv_schemas_create/')
        delete_files_from_directory('schemas/ajv_schemas_update/')
    
    def genMapperTypeScript(self, schemas):
        with open('templates/template.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open(f'{self.schemas_directory}/mapper.ts', 'w') as tsf:
                tsf.write(data)
                
        with open('templates/ajv_type.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open(f'{self.schemas_directory}/mapper_ajv.ts', 'w') as tsf:
                tsf.write(data)
    
    def genInsertTypeScript(self, schemas):
        # Generating Create TypeScript files
        for schema in schemas["schemas"]:
            with open('templates/ajv_create.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open(f'{self.schemas_directory}/ajv_schemas_create/{schema["apitablename"]}.ts', 'w') as tsf:
                    tsf.write(data)
                    
    def genUpdateTypeScript(self, schemas):
        for schema in schemas["schemas"]:
            with open('templates/ajv_update.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open(f'{self.schemas_directory}/ajv_schemas_update/{schema["apitablename"]}.ts', 'w') as tsf:
                    tsf.write(data)
            

if __name__ == "__main__":
    data = ""
    with open('schema.json', 'r') as jsf:
        data = json.loads(jsf.read())
        
        data = {"schemas":data}
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(data)
    