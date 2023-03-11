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
        
if __name__ == "__main__":
    data = ""
    with open('schema.json', 'r') as jsf:
        data = json.loads(jsf.read())
        
        data = {"schemas":data}
    typescriptGen = TypescriptGen()
    typescriptGen.genTypeScript(data)
    