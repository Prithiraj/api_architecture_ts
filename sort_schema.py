class SortSchema():
		def __init__(self):
			pass
		
		def sortSchema(self, schemas):
			
			order_by_dep = []
			for x in schemas:
				if len(x['fk_list']) == 0:
					del x['fk_list']
					order_by_dep.append(x)
					schemas.remove(x)
			# print(len(order_by_dep))
			# print(len(schemas))
			# order_by_dep = [x["relname"] for x in schemas if len(x["fk_list"])==0]
			# print([colinfo["dbtablename"] for colinfo in order_by_dep])
			while len(schemas) > 0:
				for schema in schemas:
					for fk in schema["fk_list"]:
						if fk in [colinfo["dbtablename"] for colinfo in order_by_dep]:
							schema["fk_list"].remove(fk)
						if fk == schema["dbtablename"]:
							schema["fk_list"].remove(fk)

					if schema not in order_by_dep:
						if len(schema["fk_list"])==0:
							del schema["fk_list"]
							order_by_dep.append(schema)
							schemas.remove(schema)
							# schema["fk_list"].remove(schema["relname"])
			
			return {"schemas": order_by_dep}
  		