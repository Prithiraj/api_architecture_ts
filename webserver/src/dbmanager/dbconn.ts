// import * as ssh2 from 'ssh2';
import { Pool } from 'pg';

const dbconfig_demo = {
	"SSH_UN": "ec2-user",
	"PG_UN": "admin",
	"PG_DB_NAME": "mydatabase",
	"PG_DB_PW": "super123",
	"SSH_PKEY": "/Users/nime/clients/taygo/taygodev-aws.pem",
	"SSH_HOST": "44.204.82.125",
	"DB_HOST": "postgresql-104830-0.cloudclusters.net",
	"LOCALHOST": "127.0.0.1",
	"PORT": 10003,
	"TUNNELING": false
}

const dbconfig_taygo = {
	"SSH_UN": "ec2-user",
	"PG_UN": "postgres_crm_013",
	"PG_DB_NAME": "mydatabase",
	"PG_DB_PW": "DrCKopuzbFO4Wv53HCqf",
	"SSH_PKEY": "/Users/nime/clients/taygo/taygodev-aws.pem",
	"SSH_HOST": "44.204.82.125",
	"DB_HOST": "database-for-validation.cqgoktb7f5aa.us-east-1.rds.amazonaws.com",
	"LOCALHOST": "127.0.0.1",
	"PORT": 5432,
	"TUNNELING": false
}

const dbconfig_local = {
	"SSH_UN": "ec2-user",
	"PG_UN": "postgres",
	"PG_DB_NAME": "mydatabase",
	"PG_DB_PW": "Superpost!1",
	"SSH_PKEY": "/Users/nime/clients/taygo/taygodev-aws.pem",
	"SSH_HOST": "44.204.82.125",
	"DB_HOST": "localhost",
	"LOCALHOST": "127.0.0.1",
	"PORT": 5432,
	"TUNNELING": false
}

const pool = new Pool({
    host: dbconfig_local.DB_HOST,
    port: dbconfig_local.PORT,
    user: dbconfig_local.PG_UN,
    password: dbconfig_local.PG_DB_PW,
    database: dbconfig_local.PG_DB_NAME
  });

export default pool;
