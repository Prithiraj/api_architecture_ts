import chevron
import json

class TypescriptGen:
    def __init__(self):
        pass
    
    def genTypeScript(self, schemas):
        with open('template.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open('mapper.ts', 'w') as tsf:
                tsf.write(data)
                
        with open('ajv_type.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open('mapper_ajv.ts', 'w') as tsf:
                tsf.write(data)


if __name__ == "__main__":
    data = ""
    with open('schema.json', 'r') as jsf:
        data = json.loads(jsf.read())
        
        data = {"schemas":data}
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(data)
    