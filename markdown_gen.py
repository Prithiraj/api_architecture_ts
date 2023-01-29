from utils.utilities import delete_files_from_directory
import chevron
import sys
import json

class MarkdownGen:
    def __init__(self):
        self.schemas_directory = "webserver/src/mdgen/"
        
        delete_files_from_directory([self.schemas_directory])
        
    def genInsertMD(self, schemas):
        with open('templates/docs/doc_insert.mustache', 'r') as mdf:
            data = chevron.render(mdf, schemas)
            
            with open(f'{self.schemas_directory}doc_insert.md', 'w') as mwf:
                mwf.write(data)
                
    def genUpdateMD(self, schemas):
        # TODO: Replace the schema manipulation codes from here.
        for schema in schemas["schemas"]:
            pk = [x["apicolname"] for x in schema["columnInfoList"] if x["primarykey"]=='t']
            schema["primarykey"] = pk[0] if len(pk) > 0 else ""
            
        accepted_names = ['theme', 'contactlifecycle', 'persons', 'loleadsource', 'eventtype', 'user', 'workflow', 'workflowstate', 'engagement', 'contacttag', 'eventsv2', 'contactstatus', 'events', 'property', 'organization', 'loan', 'losubscription', 'loleadraw', 'losubscriptiondailystats', 'contactcustomfield', 'lolead', 'template', 'element', 'page', 'contact', 'activitylog', 'contactreminder', 'contactotherassociates', 'contactcomment']
        schemas["schemas"] = [x for x in schemas["schemas"] if bool(x["primarykey"]) is True and x["apitablename"].lower() in accepted_names]
        with open('templates/docs/doc_update.mustache', 'r') as mdf:
            data = chevron.render(mdf, schemas)
            
            with open(f'{self.schemas_directory}doc_update.md', 'w') as mwf:
                mwf.write(data) 
                
        with open('templates/docs/doc_update_admin.mustache', 'r') as mdf:
            data = chevron.render(mdf, schemas)
            
            with open(f'{self.schemas_directory}doc_update_admin.md', 'w') as mwf:
                mwf.write(data) 
        
        
    def generateMarkdownDocumentation(self, schemas):
        
        # TODO
        # 1. Perform schema processing for insert
        # A. make deep copy of the schema
                

        
        # 2. For insert
        # 3. For update
        # 4. For select
        
        pass