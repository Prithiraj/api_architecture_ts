select number, columname, name, attnum, notnullval, atttypmod,type, primarykey,uniquekey,foreignkey,foreignkey_fieldnum, foreignkey_connnum, auto, column_default from
    (select *, 
		rank() over (partition by name, columname order by foreignkey asc) as rnk from 
		(SELECT  
			f.attnum AS number,
			c.relname as columname,
			f.attname AS name,  
			f.attnum,  
			f.attnotnull AS notnullval,  
			f.atttypmod,
			p.conkey,
			pg_catalog.format_type(f.atttypid,f.atttypmod) AS type,
			d.adbin AS column_default, 
			CASE  
					WHEN p.contype = 'p' THEN 't'  
					ELSE 'f'  
			END AS primarykey,  
			CASE  
					WHEN p.contype = 'u' THEN 't'  
					ELSE 'f'
			END AS uniquekey,
			CASE
					WHEN p.contype = 'f' THEN c.relname
			END AS foreignkey,
			CASE
					WHEN p.contype = 'f' THEN p.confkey
			END AS foreignkey_fieldnum,
			CASE
					WHEN p.contype = 'f' THEN p.conkey
			END AS foreignkey_connnum,
			case
					when pg_get_expr(d.adbin, d.adrelid) like 'nextval%%' then true
					else false
			end as auto
	FROM pg_attribute f  
			JOIN pg_class c ON c.oid = f.attrelid  
			JOIN pg_type t ON t.oid = f.atttypid  
			LEFT JOIN pg_attrdef d ON d.adrelid = c.oid AND d.adnum = f.attnum  
			LEFT JOIN pg_namespace n ON n.oid = c.relnamespace  
			LEFT JOIN pg_constraint p ON p.conrelid = c.oid AND f.attnum = ANY (p.conkey)
	WHERE c.relkind = 'r'::char  
			AND n.nspname = 'public'  -- Replace with Schema name  
			AND c.relname like '%%'  -- Replace with table name  # bridge_contact_loan
			AND f.attnum > 0 ) src ) data
where rnk=1 ORDER BY number;