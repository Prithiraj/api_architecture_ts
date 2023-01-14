// import {Client} from "pg";
// import tunnel from "tunnel-ssh";
import { readJSONFile } from "../utils/utils";
import { connectToDatabase } from "./database";

const filePath = "src/dbmanager/dbconfig.json";


async function main() {
	const data = await readJSONFile(filePath);
	await connectToDatabase(
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
// let client = new Client({
// 	host: process.env.PGHOST,
// 	user: process.env.PGUSER,
// 	port: parseInt(process.env.PGPORT as string),
// 	database: process.env.PGDATABASE
// });

// client.connect();