# import json
# from code_generatory import CodeGenerator
from connect import connect_sqlalc
from marshmallow import Schema, fields
from utils.utilities import remove_special_chars, to_camel_case, to_ajv_type
    
class TableInfo:
    def __init__(self,schemaname):
        self.tables = []
        self.schemaname = schemaname
    
    def get_tables(self, schemaname='public'):
        query = f"SELECT * FROM pg_catalog.pg_tables where schemaname = '{schemaname}';"
        engine = connect_sqlalc()
        
        with engine.connect() as connection:
            result = connection.execute(query)
            for row in result:
                self.tables.append(row['tablename'])
                
        # print(len(self.tables))

        return self.tables
    
    @staticmethod
    def get_all_table_info(schemaname):
        query = f"""select number, columname, name, attnum, notnullval, atttypmod,type, primarykey,uniquekey,foreignkey,foreignkey_fieldnum, foreignkey_connnum from
			(select *, 
				rank() over (partition by name order by foreignkey asc) as rnk from 
			(SELECT  
				f.attnum AS number,
				c.relname as columname,
				f.attname AS name,  
				f.attnum,  
				f.attnotnull AS notnullval,  
				f.atttypmod,
				pg_catalog.format_type(f.atttypid,f.atttypmod) AS type,  
				CASE  
					WHEN p.contype = 'p' THEN 't'  
					ELSE 'f'  
				END AS primarykey,  
				CASE  
					WHEN p.contype = 'u' THEN 't'  
					ELSE 'f'
				END AS uniquekey,
				CASE
					WHEN p.contype = 'f' THEN g.relname
				END AS foreignkey,
				CASE
					WHEN p.contype = 'f' THEN p.confkey
				END AS foreignkey_fieldnum,
				CASE
					WHEN p.contype = 'f' THEN p.conkey
				END AS foreignkey_connnum
			FROM pg_attribute f  
				JOIN pg_class c ON c.oid = f.attrelid  
				JOIN pg_type t ON t.oid = f.atttypid  
				LEFT JOIN pg_attrdef d ON d.adrelid = c.oid AND d.adnum = f.attnum  
				LEFT JOIN pg_namespace n ON n.oid = c.relnamespace  
				LEFT JOIN pg_constraint p ON p.conrelid = c.oid AND f.attnum = ANY (p.conkey)  
				LEFT JOIN pg_class AS g ON p.confrelid = g.oid  
			WHERE c.relkind = 'r'::char  
				AND n.nspname = 'public'  -- Replace with Schema name  
				AND c.relname like '%%'  -- Replace with table name  # bridge_contact_loan
				AND f.attnum > 0 ) src ) data
			where rnk=1 ORDER BY number;"""
        engine = connect_sqlalc()
        result = ""
        with engine.connect() as connection:
            result = connection.execute(query)
        return result.fetchall()
    

if __name__ == "__main__":
    
    print(to_camel_case("summary_line"))   
    print(to_camel_case("_lanes")) 
    print(to_camel_case("_Hello_brot.her_good_morning"))
        