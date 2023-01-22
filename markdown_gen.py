from utils.utilities import delete_files_from_directory
import chevron
import sys
import json

class MarkdownGen:
    def __init__(self):
        self.schemas_directory = "webserver/src/mdgen/"
        
        delete_files_from_directory(self.schemas_directory)
        
    def genInsertMD(self, schemas):
        with open('templates/doc_insert.mustache', 'r') as mdf:
            data = chevron.render(mdf, schemas)
            
            with open(f'{self.schemas_directory}doc_insert.md', 'w') as mwf:
                mwf.write(data)
            