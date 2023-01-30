import copy
import os
import chevron

from utils.utilities import create_directory, delete_files_from_directory

class UpdateTypescriptGen:
    def __init__(self):
        
        self.schemas_directory = "webserver/src/schemas/ajv_schemas_update"
        self.doc_directory = "webserver/src/doc/update"
        
        delete_files_from_directory([self.schemas_directory, self.doc_directory])
        create_directory([self.schemas_directory,self.doc_directory])

    
    def _processUpdateSchema(self, update_schemas):
        
        # 1. Exclude the excluded columns out of the schemas
        # 2. Include primary key in the schema
		# 3. Exclude primary key from the AnyOf condition
        pk = []
        for update_schema in update_schemas['schemas']:
            columns_to_remove = update_schema['ajv_update']['exclude']
            columns_from = update_schema['columnInfoList']
            
            pk = [x["apicolname"] for x in columns_from if x['primarykey']=='t']
            update_schema["primarykey"] = pk[0] if len(pk) > 0 else None
            update_schema['columnInfoList'] = [x for x in columns_from if x['apicolname'] not in columns_to_remove]
            
            
            if update_schema["primarykey"] not in columns_to_remove:
                columns_to_remove.append(update_schema["primarykey"])
            update_schema['columnInfoListAnyOf'] = [x for x in columns_from if x['apicolname'] not in columns_to_remove]

        return update_schemas
    
    def _genPutMarkDown(self, update_schemas):
        with open('templates/docs/doc_update.mustache', 'r') as mdf:
            data = chevron.render(mdf, update_schemas)
            
            with open(f'{self.doc_directory}/doc_update.md', 'w') as mwf:
                mwf.write(data)
                
        with open('templates/docs/doc_update_admin.mustache', 'r') as mdf:
            data = chevron.render(mdf, update_schemas)
            
            with open(f'{self.doc_directory}/doc_update_admin.md', 'w') as mwf:
                mwf.write(data)
                
    def _generateAJVUpdateSchemaValidator(self, update_schemas):
        for schema in update_schemas["schemas"]:
            # Generating create schemas
            with open('templates/ajv_update.mustache', 'r') as asf:
                data = chevron.render(asf, schema)
                
                with open(f'{self.schemas_directory}/{schema["apitablename"]}.ts', 'w') as tsf:
                    tsf.write(data)
        
        print("Generated update schema validation")
    
    def _minimizeTableName(self, update_schemas):
        for update_schema in update_schemas['schemas']:
            table_name = update_schema['apitablename'].lower()
            
            update_schema['apitablename'] = table_name

    def generatePutValidatorDocCode(self, schemas):
        
        # 1. Make deep copy of the schema
        update_schemas = copy.deepcopy(schemas)
        
        # 2. Perform schema based operations
        self._processUpdateSchema(update_schemas)
        
        # 3. Generating Create TypeScript files
        self._generateAJVUpdateSchemaValidator(update_schemas)
       
        # 4. Minimizee table name before documenting
        self._minimizeTableName(update_schemas)
        
        # 5. Generate markdown for post
        accepted_names = ['theme', 'contactlifecycle', 'persons', 'loleadsource', 'eventtype', 'user', 'workflow', 'workflowstate', 'engagement', 'contacttag', 'eventsv2', 'contactstatus', 'events', 'property', 'organization', 'loan', 'losubscription', 'loleadraw', 'losubscriptiondailystats', 'contactcustomfield', 'lolead', 'template', 'element', 'page', 'contact', 'activitylog', 'contactreminder', 'contactotherassociates', 'contactcomment']
        update_schemas["schemas"] = [x for x in update_schemas["schemas"] if bool(x["primarykey"]) is True and x["apitablename"].lower() in accepted_names]
        self._genPutMarkDown(update_schemas)
