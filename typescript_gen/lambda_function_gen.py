import copy
import chevron
from utils.utilities import create_directory, delete_files_from_directory


class LambdaFunctionGen:
    def __init__(self):
        pass
    
    def _preprocessSchema(self, sl_function_schemas):
        pass

    def _genLambdaFuncTypescript(self, sl_function_schemas, template_filepath, destination_directory ,destination_filename_prefix, message=None):
        
        delete_files_from_directory([destination_directory])
        create_directory([destination_directory])

        for schema in sl_function_schemas["schemas"]:
            with open(template_filepath, 'r') as dcf:
                data = chevron.render(dcf, schema)
                
                with open(f'{destination_directory}/{destination_filename_prefix}_{schema["apitablename"]}.ts', 'w') as dqf:
                    dqf.write(data)

        if bool(message) is True:
            print(message)
    
    def generateTypescriptSLFunc(self, schemas):
        
        # 1. make deep copy of the schemas array
        sl_function_schemas = copy.deepcopy(schemas)
        
        # 2. Perform process
        self._preprocessSchema(sl_function_schemas)
        
        # 3. generate post lambda functions
        self._genLambdaFuncTypescript(sl_function_schemas, "templates/lambda_insert_functions.mustache",
                                      "webserver/src/api_calls/api_post", "post", "POST functions generated")
        
        # 4. generate put lambda functions
        self._genLambdaFuncTypescript(sl_function_schemas, "templates/lambda_update_functions.mustache",
                                      "webserver/src/api_calls/api_put", "put", "PUT functions generated")
        
        # 5. generate select lambda functions
        self._genLambdaFuncTypescript(sl_function_schemas, "templates/lambda_select_functions.mustache",
                                      "webserver/src/api_calls/api_get", "get", "GET functions generated")
        
