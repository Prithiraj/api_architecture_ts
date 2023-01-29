from utils.utilities import delete_files_from_directory
import copy
import chevron
import json
import sys

class TypescriptGen:
    def __init__(self):
        self.schemas_directory = "webserver/src/schemas"
        self.db_directory = "webserver/src/dbmanager"
        self.sl_func_directory = "webserver/src/api_calls"
        
        # ToDo: Currently this refers to the python directory 
        # need to set it up for the webserver
        delete_files_from_directory(self.schemas_directory + '/ajv_schemas_create/')
        delete_files_from_directory(self.schemas_directory + '/ajv_schemas_update/')
        delete_files_from_directory(self.db_directory + '/db_insert/')
        delete_files_from_directory(self.db_directory + '/db_insert_sl/')
        delete_files_from_directory(self.db_directory + '/db_update/')
        delete_files_from_directory(self.sl_func_directory + '/api_post/')
        # sys.exit()
    
    # Prepares types
    def genMapperTypeScript(self, schemas):
        with open('templates/template.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open(f'{self.schemas_directory}/mapper.ts', 'w') as tsf:
                tsf.write(data)
                
        with open('templates/ajv_type.mustache', 'r') as f:
            data = chevron.render(f, schemas)
            
            with open(f'{self.schemas_directory}/mapper_ajv.ts', 'w') as tsf:
                tsf.write(data)
    
    # Generate insert schema typescript
    def genInsertTypeScript(self, schemas):
        # Generating Create TypeScript files
        for schema in schemas["schemas"]:
            
            # Generating create schemas
            with open('templates/ajv_create.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open(f'{self.schemas_directory}/ajv_schemas_create/{schema["apitablename"]}.ts', 'w') as tsf:
                    tsf.write(data)
    
    # Generate update schema typescript
    def genUpdateTypeScript(self, schemas):
        for schema in schemas["schemas"]:
            with open('templates/ajv_update.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open(f'{self.schemas_directory}/ajv_schemas_update/{schema["apitablename"]}.ts', 'w') as tsf:
                    tsf.write(data)
    
    # Generate insert db query typescript
    def genInsertQueryTypescript(self, schemas):
        for schema in schemas["schemas"]:
            # Generating insert schemas
            with open('templates/db_insert.mustache', 'r') as dcf:
                data = chevron.render(dcf, schema)
                
                with open(f'{self.db_directory}/db_insert/{schema["apitablename"]}.insert.ts', 'w') as dqf:
                    dqf.write(data)
   
    # Generate update db query typescript 
    def genUpdateQueryTypescript(self, schemas):
        for schema in schemas["schemas"]:
            # Generating update db functions
            with open('templates/db_update.mustache', 'r') as uqt:
                data = chevron.render(uqt, schema)
                
                with open(f'{self.db_directory}/db_update/{schema["apitablename"]}.update.ts', 'w') as dqf:
                    dqf.write(data)
                
    # Generate insert db query lambda typescript          
    def genInsertQueryLambdaTypescript(self, schemas):
        for schema in schemas["schemas"]:
            # Generating insert schemas
            with open('templates/db_insert_sl.mustache', 'r') as dcf:
                data = chevron.render(dcf, schema)
                
                with open(f'{self.db_directory}/db_insert_sl/{schema["apitablename"]}.insert.ts', 'w') as dqf:
                    dqf.write(data)
                    
    # Generate update db query lambda typescript
    def genUpdateQueryLambdaTypescript(self, schemas):
        for schema in schemas["schemas"]:
            # Generating insert schemas
            with open('templates/db_update_sl.mustache', 'r') as dcf:
                data = chevron.render(dcf, schema)
                
                with open(f'{self.db_directory}/db_update_sl/{schema["apitablename"]}.update.ts', 'w') as dqf:
                    dqf.write(data)

    # Generate insert lambda function
    def genInsertLambdaFunction(self, schemas):
        for schema in schemas["schemas"]:
            with open('templates/lambda_insert_functions.mustache', 'r') as lif:
                data = chevron.render(lif, schema)
                
                with open(f'{self.sl_func_directory}/api_post/post_{schema["dbtablename"]}.ts', 'w') as dfq:
                    dfq.write(data)

    # Generate insert lambda function
    def genUpdateLambdaFunction(self, schemas):
        for schema in schemas["schemas"]:
            with open('templates/lambda_update_functions.mustache', 'r') as lif:
                data = chevron.render(lif, schema)
                
                with open(f'{self.sl_func_directory}/api_put/put_{schema["dbtablename"]}.ts', 'w') as dfq:
                    dfq.write(data)

    # Generate insert lambda cases
    def genInsertLambdaCases(self, schemas):
        for schema in schemas["schemas"]:
            print("case '"+schema["apitablename"].lower()+"':")
            print('  return post'+ schema["apitablename"] + '(request);')

    # Generate update lambda cases
    def genInsertLambdaCases(self, schemas):
        for schema in schemas["schemas"]:
            print("case '"+schema["apitablename"].lower()+"':")
            print('  return put'+ schema["apitablename"] + '(request);')

if __name__ == "__main__":
    data = ""
    with open('schema.json', 'r') as jsf:
        data = json.loads(jsf.read())
        
        data = {"schemas":data}
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(data)
    