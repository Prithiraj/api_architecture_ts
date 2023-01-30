from typescript_gen.select_typescript_gen import SingleSelectTypescriptGen
from typescript_gen.dml_query_typescript_gen import DMLQueryTypescriptGen
from typescript_gen.insert_typescript_gen import InsertTypescriptGen
from typescript_gen.lambda_function_gen import LambdaFunctionGen
from typescript_gen.mapper_typescript_gen import MapperTypescriptGen
from typescript_gen.switch_case_typescript_gen import SwitchCaseTypescriptGen
from typescript_gen.update_typescript_gen import UpdateTypescriptGen
from utils.utilities import delete_files_from_directory
import chevron
import json

class TypescriptGen:
    def __init__(self):
        self.schemas_directory = "webserver/src/schemas"
        self.db_directory = "webserver/src/dbmanager"
        self.sl_func_directory = "webserver/src/api_calls"
        
        delete_files_from_directory([
            self.schemas_directory + '/ajv_schemas_create/',
            self.schemas_directory + '/ajv_schemas_update/',
            self.db_directory + '/db_insert/',
            self.db_directory + '/db_insert_sl/',
            self.db_directory + '/db_update/admin/',
            self.db_directory + '/db_update/general/',
            self.db_directory + '/db_update_sl/admin/',
            self.db_directory + '/db_update_sl/general/',
            self.sl_func_directory + '/api_post/',
            self.sl_func_directory + '/api_put/'])
        # sys.exit()
    

    def handleInsertSchemaDocCode(self, schemas):
        insertTypescriptGen = InsertTypescriptGen()
        insertTypescriptGen.generatePostValidatorDocCode(schemas)
    
    def handleUpdateSchemaDocCode(self, schemas):
        updateTypescriptGen = UpdateTypescriptGen()
        updateTypescriptGen.generatePutValidatorDocCode(schemas)
    
    def handleDMLQueryCodeGen(self, schemas):
        dbQueryTypescriptGen = DMLQueryTypescriptGen()
        dbQueryTypescriptGen.generateTypescriptDMLQueries(schemas)
        
    def handleSLFunctionGen(self, schemas):
        lambdaFunctionGen = LambdaFunctionGen()
        lambdaFunctionGen.generateTypescriptSLFunc(schemas)
        
    def handleSwitchCaseGen(self, schemas):
        switchCaseTypescriptGen = SwitchCaseTypescriptGen()
        switchCaseTypescriptGen.genSLSwitchCases(schemas)
        
    def handleMappersGen(self, schemas):
        mapperTypescriptGen = MapperTypescriptGen()
        mapperTypescriptGen.genMapperTypescript(schemas)
    
    def handleSelectByIDGen(self, schemas):
        selectTypescriptGen = SingleSelectTypescriptGen()
        selectTypescriptGen.generateTypescriptSelectByIDQueries(schemas)
        
    # # Prepares types
    # def genMapperTypeScript(self, schemas):
    #     with open('templates/template.mustache', 'r') as f:
    #         data = chevron.render(f, schemas)
            
    #         with open(f'{self.schemas_directory}/mapper.ts', 'w') as tsf:
    #             tsf.write(data)
                
    #     with open('templates/ajv_type.mustache', 'r') as f:
    #         data = chevron.render(f, schemas)
            
    #         with open(f'{self.schemas_directory}/mapper_ajv.ts', 'w') as tsf:
    #             tsf.write(data)
    
    # # Generate insert schema typescript
    # def genInsertTypeScript(self, schemas):
    #     # Generating Create TypeScript files
    #     print("Generating insert schemas")
    #     for schema in schemas["schemas"]:
            
    #         # Generating create schemas
    #         with open('templates/ajv_create.mustache', 'r') as asf:
    #             data = chevron.render(asf, schema)
                
    #             with open(f'{self.schemas_directory}/ajv_schemas_create/{schema["apitablename"]}.ts', 'w') as tsf:
    #                 tsf.write(data)
    
    # # Generate update schema typescript
    # def genUpdateTypeScript(self, schemas):
    #     print("Generating update schemas typescript")
    #     for schema in schemas["schemas"]:
    #         with open('templates/ajv_update.mustache', 'r') as asf:
    #             data = chevron.render(asf, schema)
                
    #             with open(f'{self.schemas_directory}/ajv_schemas_update/{schema["apitablename"]}.ts', 'w') as tsf:
    #                 tsf.write(data)
    
    # # Generate insert db query typescript
    # def genInsertQueryTypescript(self, schemas):
    #     print("Generating insert db query typescript")
    #     for schema in schemas["schemas"]:
    #         # Generating insert schemas
    #         with open('templates/db_insert.mustache', 'r') as dcf:
    #             data = chevron.render(dcf, schema)
                
    #             with open(f'{self.db_directory}/db_insert/{schema["apitablename"]}.insert.ts', 'w') as dqf:
    #                 dqf.write(data)
   
    # # Generate update db query typescript 
    # def genUpdateQueryTypescript(self, schemas):
    #     print("Generating update query typescript")
    #     for schema in schemas["schemas"]:
    #         # Generating update db functions
    #         with open('templates/general/db_update.mustache', 'r') as uqt:
    #             data = chevron.render(uqt, schema)
                
    #             with open(f'{self.db_directory}/db_update/general/{schema["apitablename"]}.update.ts', 'w') as dqf:
    #                 dqf.write(data)
                
    # # Generate insert db query lambda typescript          
    # def genInsertQueryLambdaTypescript(self, schemas):
    #     print("Genereating insert lambda typescript")
    #     for schema in schemas["schemas"]:
    #         # Generating insert schemas
    #         with open('templates/db_insert_sl.mustache', 'r') as dcf:
    #             data = chevron.render(dcf, schema)
                
    #             with open(f'{self.db_directory}/db_insert_sl/{schema["apitablename"]}.insert.ts', 'w') as dqf:
    #                 dqf.write(data)
                    
    # # Generate update db query lambda typescript
    # def genUpdateQueryLambdaTypescript(self, schemas):
    #     print("Generating update query lambda typescript")
    #     for schema in schemas["schemas"]:
    #         # Generating insert schemas
    #         with open('templates/general/db_update_sl.mustache', 'r') as dcf:
    #             data = chevron.render(dcf, schema)
                
    #             with open(f'{self.db_directory}/db_update_sl/general/{schema["apitablename"]}.update.ts', 'w') as dqf:
    #                 dqf.write(data)
                    
    # # Generate update db query lambda typescript
    # def genAdminUpdateQueryTypescript(self, schemas):
    #     print("Generating amdin update query typescript")
    #     for schema in schemas["schemas"]:
    #         # Generating insert schemas
    #         with open('templates/admin/db_update.mustache', 'r') as dcf:
    #             data = chevron.render(dcf, schema)
                
    #             with open(f'{self.db_directory}/db_update/admin/{schema["apitablename"]}.update.ts', 'w') as dqf:
    #                 dqf.write(data)
                    
    # # Generate update db query lambda typescript
    # def genAdminUpdateQueryLambdaTypescript(self, schemas):
    #     print("Generating admin update query lambda typescript")
    #     for schema in schemas["schemas"]:
    #         # Generating insert schemas
    #         with open('templates/admin/db_update_sl.mustache', 'r') as dcf:
    #             data = chevron.render(dcf, schema)
                
    #             with open(f'{self.db_directory}/db_update_sl/admin/{schema["apitablename"]}.update.ts', 'w') as dqf:
    #                 dqf.write(data)
                    
    # # Generate insert lambda function
    # def genInsertLambdaFunction(self, schemas):
    #     for schema in schemas["schemas"]:
    #         with open('templates/lambda_insert_functions.mustache', 'r') as lif:
    #             data = chevron.render(lif, schema)
                
    #             with open(f'{self.sl_func_directory}/api_post/post_{schema["dbtablename"]}.ts', 'w') as dfq:
    #                 dfq.write(data)

    # # Generate insert lambda function
    # def genUpdateLambdaFunction(self, schemas):
    #     for schema in schemas["schemas"]:
    #         with open('templates/lambda_update_functions.mustache', 'r') as lif:
    #             data = chevron.render(lif, schema)
                
    #             with open(f'{self.sl_func_directory}/api_put/put_{schema["dbtablename"]}.ts', 'w') as dfq:
    #                 dfq.write(data)

    # # Generate insert lambda cases
    # def genInsertLambdaCases(self, schemas):
    #     for schema in schemas["schemas"]:
    #         print("case '"+schema["apitablename"].lower()+"':")
    #         print('  return post'+ schema["apitablename"] + '(request);')

    # # Generate update lambda cases
    # def genUpdateLambdaCases(self, schemas):
    #     for schema in schemas["schemas"]:
    #         print("case '"+schema["apitablename"].lower()+"':")
    #         print('  return put'+ schema["apitablename"] + '(request);')
    
    # # Generate update lambda cases
    # def genAdminUpdateLambdaCases(self, schemas):
    #     for schema in schemas["schemas"]:
    #         print("case 'admin/"+schema["apitablename"].lower()+"':")
    #         print('  return put'+ schema["apitablename"] + '_admin(request);')

if __name__ == "__main__":
    data = ""
    with open('schema.json', 'r') as jsf:
        data = json.loads(jsf.read())
        
        data = {"schemas":data}
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(data)
    