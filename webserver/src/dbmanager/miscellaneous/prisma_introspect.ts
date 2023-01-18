import { exec } from 'node:child_process'
import tunnel from 'tunnel-ssh'
import { readJSONFile } from '../../utils/utils'

function introspectDatabase(
  sshUsername: string,
  sshKeyPath: string,
  sshHost: string,
  databaseHost: string,
  databaseName: string,
  databaseUsername: string,
  databasePassword: string,
  databasePort: string,
  tunneling: boolean,
) {
  let tnl;
  if (tunneling !== false){
    tnl = tunnel({
      host: sshHost,
      username: sshUsername,
      privateKey: sshKeyPath,
      port: 22,
      dstPort: 5432,
      dstHost: databaseHost,
      localPort: 5433,
    });
  }

  try {
    // Use the `prisma introspect` command to generate a Prisma schema file based on the database structure
    const result = exec(
		`prisma db pull --database-url "postgresql://${databaseUsername}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}"`
	)
    console.log(`prisma db pull --database-url "postgresql://${databaseUsername}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}"`)
    console.log(result.stdout);
  } finally {
    if (tnl !== undefined){
      tnl.close();
    }
  }
}

async function main() {
	const filePath = "src/dbmanager/dbconfig-demo.json";	
	const data = await readJSONFile(filePath);
  console.log(data)
	introspectDatabase(
		data.SSH_UN,
		data.SSH_PKEY,
		data.SSH_HOST,
		data.DB_HOST,
		data.PG_DB_NAME,
		data.PG_UN,
		data.PG_DB_PW,
    data.PORT,
    data.TUNNELING,
	);
  };
  

main();

