import { exec } from 'node:child_process'
import tunnel from 'tunnel-ssh'
import { readJSONFile } from '../utils/utils'

async function introspectDatabase(
  sshUsername: string,
  sshKeyPath: string,
  sshHost: string,
  databaseHost: string,
  databaseName: string,
  databaseUsername: string,
  databasePassword: string,
) {
  const tnl = tunnel({
    host: sshHost,
    username: sshUsername,
    privateKey: sshKeyPath,
    port: 22,
    dstPort: 5432,
    dstHost: databaseHost,
    localPort: 5433,
  });

  try {
    // Use the `prisma introspect` command to generate a Prisma schema file based on the database structure
    const result = exec(
		`prisma introspect --database-url "postgresql://${databaseUsername}:${databasePassword}@localhost:5433/${databaseName}"`
	)
    console.log(result.stdout)
  } finally {
    tnl.close()
  }
}

async function main() {
	const filePath = "src/dbmanager/dbconfig.json";	
	const data = await readJSONFile(filePath);
	introspectDatabase(
		data.SSH_UN,
		data.SSH_PKEY,
		data.SSH_HOST,
		data.DB_HOST,
		data.PG_DB_NAME,
		data.PG_UN,
		data.PG_DB_PW
	);
  };
  

main();

