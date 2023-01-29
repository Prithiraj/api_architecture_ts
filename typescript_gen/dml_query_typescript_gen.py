import chevron
import copy
from utils.utilities import create_directory, delete_files_from_directory


class DMLQueryTypescriptGen:
    def __init__(self):
        pass
    
    def _processSchemaPreDBQuery(self, query_schemas):
        pk = []
        for query_schema in query_schemas["schemas"]:
            columns_from = query_schema['columnInfoList']
            pk = [x["apicolname"] for x in columns_from if x["primarykey"]=='t']
            
            query_schema["primarykey"] = pk[0] if len(pk) > 0 else None
            
        return query_schemas
    
    def _genDBQueryTypescript(self, query_schemas, template_filepath, destination_directory ,destination_filename_suffix, message=None):
        
        delete_files_from_directory([destination_directory])
        create_directory([destination_directory])

        for schema in query_schemas["schemas"]:
            with open(template_filepath, 'r') as dcf:
                data = chevron.render(dcf, schema)
                
                with open(f'{destination_directory}/{schema["apitablename"]}.{destination_filename_suffix}.ts', 'w') as dqf:
                    dqf.write(data)

        if bool(message) is True:
            print(message)
    
    def generateTypescriptDMLQueries(self, schemas):
        
        # 1. Make a deep copy of the schema
        query_schemas = copy.deepcopy(schemas)
        
        # 2. Process schemas
        self._processSchemaPreDBQuery(query_schemas)
        
        # 3. Generate query for normal insert
        self._genDBQueryTypescript(query_schemas, "templates/db_insert.mustache", 
                                   "webserver/src/dbmanager/db_insert", "insert", "printed normal insert queries")
        
        # 4. Generate query for SL insert
        self._genDBQueryTypescript(query_schemas, "templates/db_insert_sl.mustache",
                                   "webserver/src/dbmanager/db_insert_sl", "insert", "printed SL insert queries")
        
        # 5. Generate query for normal update
        self._genDBQueryTypescript(query_schemas, "templates/general/db_update.mustache",
                                   "webserver/src/dbmanager/db_update/general", "update", "printed normal update queries for general")
        
        # 6. Generate query for SL update
        self._genDBQueryTypescript(query_schemas, "templates/general/db_update_sl.mustache",
                                   "webserver/src/dbmanager/db_update_sl/general", "update", "printed sl update queries for general")

        # 7. Generate query for admin normal update
        self._genDBQueryTypescript(query_schemas, "templates/admin/db_update.mustache",
                                   "webserver/src/dbmanager/db_update/admin", "update", "printed normal update queries for admin")
        
        # 8. Generate query for admin SL update
        self._genDBQueryTypescript(query_schemas, "templates/admin/db_update_sl.mustache",
                                   "webserver/src/dbmanager/db_update_sl/admin", "update", "printed sl update queries for admin")
							
	
    