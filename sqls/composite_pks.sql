
SELECT attname, contype, attrelid, relname
FROM pg_attribute
JOIN pg_constraint
ON attrelid = conrelid AND attnum = any(conkey)
join pg_class c on attrelid = c.oid
join pg_namespace n on n.oid = c.relnamespace
WHERE relname like '%%' AND contype = 'p' and n.nspname = 'public'
ORDER BY relname;