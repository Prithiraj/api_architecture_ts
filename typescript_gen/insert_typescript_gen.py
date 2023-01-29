import copy
import os
import chevron

from utils.utilities import create_directory, delete_files_from_directory

class InsertTypescriptGen:
    def __init__(self):
        
        self.schemas_directory = "webserver/src/schemas/ajv_schemas_create"
        self.doc_directory = "webserver/src/doc/insert"
        
        delete_files_from_directory([self.schemas_directory, self.doc_directory])
        create_directory([self.schemas_directory,self.doc_directory])

    
    def _processInsertSchema(self, insert_schemas):
        
        # 1. Exclude the excluded columns out of the schemas
        # 2. Include primary key in the schema
        pk = []
        for insert_schema in insert_schemas['schemas']:
            columns_to_remove = insert_schema['ajv_insert']['exclude']
            columns_from = insert_schema['columnInfoList']
            
            insert_schema['columnInfoList'] = [x for x in columns_from if x['apicolname'] not in columns_to_remove]
            pk = [x["apicolname"] for x in columns_from if x['primarykey']=='t']
            insert_schema["primarykey"] = pk[0] if len(pk) > 0 else None 
        
        return insert_schemas
    
    def _genPostMarkDown(self, insert_schemas):
        with open('templates/docs/doc_insert.mustache', 'r') as mdf:
            data = chevron.render(mdf, insert_schemas)
            
            with open(f'{self.doc_directory}/doc_insert.md', 'w') as mwf:
                mwf.write(data)

    def _generateAJVCreateSchemaValidator(self, insert_schemas):
        for schema in insert_schemas["schemas"]:
            # Generating create schemas
            with open('templates/ajv_create.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open(f'{self.schemas_directory}/{schema["apitablename"]}.ts', 'w') as tsf:
                    tsf.write(data)
        
        print("Generated insert schema validation")
    
    def _minimizeTableName(self, insert_schemas):
        for insert_schema in insert_schemas['schemas']:
            table_name = insert_schema['apitablename'].lower()
            
            insert_schema['apitablename'] = table_name

    def generatePostValidatorDocCode(self, schemas):
        
        # 1. Make deep copy of the schema
        insert_schemas = copy.deepcopy(schemas)
        
        # 2. Perform schema based operations
        self._processInsertSchema(insert_schemas)
        
        # 3. Generating Create TypeScript files
        self._generateAJVCreateSchemaValidator(insert_schemas)
       
        # 4. Minimizee table name before documenting
        self._minimizeTableName(insert_schemas)
        
        # 5. Generate markdown for post
        accepted_names = ['theme', 'contactlifecycle', 'persons', 'loleadsource', 'eventtype', 'user', 'workflow', 'workflowstate', 'engagement', 'contacttag', 'eventsv2', 'contactstatus', 'events', 'property', 'organization', 'loan', 'losubscription', 'loleadraw', 'losubscriptiondailystats', 'contactcustomfield', 'lolead', 'template', 'element', 'page', 'contact', 'activitylog', 'contactreminder', 'contactotherassociates', 'contactcomment']
        insert_schemas["schemas"] = [x for x in insert_schemas["schemas"] if bool(x["primarykey"]) is True and x["apitablename"].lower() in accepted_names]
        self._genPostMarkDown(insert_schemas)
