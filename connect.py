from sqlalchemy import create_engine
from sshtunnel import SSHTunnelForwarder
from sqlalchemy import text

import json

creds = json.load(open("dbconfig.json", 'r'))

def connect_sqlalc():
    engine = ""
    try:
        print('Connecting to the PostgreSQL Database...')

        # ssh_tunnel = SSHTunnelForwarder(
		# 	(creds["SSH_HOST"], 22),
        # 	ssh_username = creds["SSH_UN"],
        # 	ssh_pkey = creds["SSH_PKEY"],
        # 	remote_bind_address = (creds["DB_HOST"], 5432)
		# )
        
        # ssh_tunnel.start()
        # # print(ssh_tunnel.local_bind_port)
        # engine = create_engine('postgresql://{user}:{password}@{host}:{port}/{db}'.format(
        #          host=creds["LOCALHOST"],
        #          port=ssh_tunnel.local_bind_port,
        #          user=creds["PG_UN"],
        #          password=creds["PG_DB_PW"],
        #          db=creds["PG_DB_NAME"]
        #         ))
    
        engine = create_engine('postgresql://{user}:{password}@{host}:{port}/{db}'.format(
                 host=creds["LOCALHOST"],
                 port=creds["PORT"],
                 user=creds["PG_UN"],
                 password=creds["PG_DB_PW"],
                 db=creds["PG_DB_NAME"]
                ))
    except:
        # if ssh_tunnel.is_alive():
        #     ssh_tunnel.stop()
        print('Connection Has Failed...')  
    return engine

if __name__ == "__main__":
    engine = connect_sqlalc()
    with engine.connect() as connection:
        result = connection.execute(text("select first_name from contact"))
        for row in result:
            print("firstname:", row["first_name"])
