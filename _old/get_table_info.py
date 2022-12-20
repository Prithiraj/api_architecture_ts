# import json
# from code_generatory import CodeGenerator
from connect import connect_sqlalc
from marshmallow import Schema, fields

# from sort_schema import SortSchema
# from typescript_gen import TypescriptGen

def remove_special_chars(name, delimiter):
    camel_case = name
    if name.find(delimiter)>=1:
        chunks = name.split(delimiter)
        for i in range(len(chunks)):
            if i == 0:
                camel_case = chunks[i].lower()
            else:
                camel_case += chunks[i][0].upper() + chunks[i][1:]
    if name.find(delimiter) == 0:
        camel_case = name[1:]
    return camel_case

def to_camel_case(name):
    while name.find("_")!=-1 or name.find(".")!=-1 or name.find("-")!=-1:
        name = remove_special_chars(name, "_")
        name = remove_special_chars(name, ".")
        name = remove_special_chars(name, "-")
        
    return name

def to_ajv_type(_type):
    if _type[-2:] == '[]':
        return 'array'
    
    elif _type[:3].lower() in ['int', 'sma', 'big']:
        return 'integer'
    
    elif _type[:3].lower() in ['dou', 'num']:
        return 'number'
   
    elif _type[:4].lower() == 'bool':
        return 'boolean'
    
    else:
        return 'string'
    
        
class ColumnInfoSchema(Schema):
	apicolname = fields.String()
	dbcolname = fields.String()
	notnull = fields.Boolean()
	type = fields.String()
	ajvtype = fields.String()
	primarykey = fields.String()
	foreignkey = fields.String()	

class ColumnInfoListSchema(Schema):
    columnInfoList = fields.List(fields.Nested(ColumnInfoSchema))
    fk_list = fields.List(fields.String())
    apitablename = fields.String()
    dbtablename= fields.String()

class ColumnInfo:
    def __init__(self, columnname, notnull, type, primarykey, foreignkey ):
        self.apicolname: str = to_camel_case(columnname)
        self.dbcolname: str = columnname
        self.notnull: bool = notnull
        self.type: str = type
        self.ajvtype: str = to_ajv_type(type) 
        self.primarykey = primarykey
        self.foreignkey = to_camel_case(foreignkey) if bool(foreignkey) else ""

        
class ColumnInfoList:
    def __init__(self, columnInfoList, fk_list, relname):
        self.columnInfoList = columnInfoList
        self.fk_list = fk_list
        self.apitablename = to_camel_case(relname)
        self.dbtablename = relname
        
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
                
        print(len(self.tables))

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
        table_info = []
        fk_list = []
        result = ""
        with engine.connect() as connection:
            result = connection.execute(query)
        return result.fetchall()	

    def get_table_info(self, tablename, schemaname='public'):
        query = f"""select number, name, attnum, notnullval, atttypmod,type, primarykey,uniquekey,foreignkey,foreignkey_fieldnum, foreignkey_connnum from
			(select *, 
				rank() over (partition by name order by foreignkey asc) as rnk from 
			(SELECT  
				f.attnum AS number,  
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
				AND n.nspname = '{schemaname}'  -- Replace with Schema name  
				AND c.relname = '{tablename}'  -- Replace with table name  # bridge_contact_loan
				AND f.attnum > 0 ) src ) data
			where rnk=1 ORDER BY number;"""
        engine = connect_sqlalc()
        table_info = []
        fk_list = []
        with engine.connect() as connection:
            result = connection.execute(query)
            for row in result:
                name = row["name"]
                notnull = row["notnullval"]
                _type = row["type"]
                primarykey = row["primarykey"]
                foreignkey = row["foreignkey"]

                colInfo = ColumnInfo(
                    name, 
                    notnull, 
                    _type, 
                    primarykey, 
                    foreignkey
                )

                if bool(row["foreignkey"]):
                    fk_list.append(row["foreignkey"])

                table_info.append(colInfo)
        columnInfoList = ColumnInfoList(table_info, fk_list, tablename) 
        return columnInfoList
    
    
    def get_table_info_opt(self, tablename, result):
        table_info = []
        fk_list = []
        for row in result:
            name = row["name"]
            print(name)
            notnull = row["notnullval"]
            _type = row["type"]
            primarykey = row["primarykey"]
            foreignkey = row["foreignkey"]
            colInfo = ColumnInfo(
				name, 
				notnull, 
				_type, 
				primarykey, 
				foreignkey
			)
            if bool(row["foreignkey"]):
                fk_list.append(row["foreignkey"])
            table_info.append(colInfo)
        columnInfoList = ColumnInfoList(table_info, fk_list, tablename) 
        return columnInfoList 
    
if __name__ == "__main__":
    
    # tableInfo = TableInfo()
    # tables = tableInfo.get_tables('public')
    # items = TableInfo.get_all_table_info('public')
    # schemas = []
    # for tablename in tables:
    #     table_info = []
    #     fk_list = []
    #     for item in items:
    #         name = item["name"]
    #         notnull = item["notnullval"]
    #         _type = item["type"]
    #         primarykey = item["primarykey"]
    #         foreignkey = item["foreignkey"]
    #         colInfo = ColumnInfo(
	# 			name,
	# 			notnull,
	# 			_type,
	# 			primarykey,
	# 			foreignkey
	# 		)
    #         if bool(item["foreignkey"]):
    #             fk_list.append(item["foreignkey"])
    #         table_info.append(colInfo)
    #     columnInfoList = ColumnInfoList(table_info, fk_list, tablename)
    #     schema = CodeGenerator.code_gen(columnInfoList)
    #     schemas.append(columnInfoList)
        
    # sortSchema = SortSchema()
    # sorted_schema = sortSchema.sortSchema(schemas)
    
    # with open('schema.json', 'w') as f:
    #     f.write(json.dumps(sorted_schema))	
    
    # typescriptGen = TypescriptGen()
    # typescriptGen.genTypeScript(sorted_schema)
        

    print(to_camel_case("summary_line"))   
    print(to_camel_case("_lanes")) 
    print(to_camel_case("_Hello_brot.her_good_morning"))
        