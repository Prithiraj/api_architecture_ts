import copy
import chevron
from utils.utilities import create_directory, delete_files_from_directory


class MapperTypescriptGen:
    def __init__(self):
        pass
    
    def _preprocessor(self, mapper_schemas):
        pass
    
    def _genMapperTypescript(self, mapper_schemas, template_filename, destination_dir, destination_filename, message=None):
        # delete_files_from_directory([destination_dir])
        create_directory([destination_dir])
        
        with open(template_filename, 'r') as f:
            data = chevron.render(f, mapper_schemas)
            
            with open(f'{destination_dir}/{destination_filename}.ts', 'w') as tsf:
                tsf.write(data)
        
        if bool(message) is True:
            print(message)
                
    def genMapperTypescript(self, schemas):
        
        # 1. DeepCopy
        mapper_schemas = copy.deepcopy(schemas)
        
        # 2. Preprocess
        self._preprocessor(mapper_schemas)
        
        # 3. Generate mapper.ts
        self._genMapperTypescript(mapper_schemas, 'templates/template.mustache', 
                                  'webserver/src/schemas', 'mapper', 'Common mapper')
        
        # 4. Generate mapper types
        self._genMapperTypescript(mapper_schemas, 'templates/ajv_type.mustache',
                                  'webserver/src/schemas', 'mapper_ajv', 'Common mapper types')
