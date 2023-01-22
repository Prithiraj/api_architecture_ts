import dataKey from "../../utils/utils";
import pool from "../dbconn";

export async function insert_prismaMigrations(input: any) {

  // procesor

  const table_cols: any = {
    id: 'id',
    checksum: 'checksum',
    finishedAt: 'finished_at',
    migrationName: 'migration_name',
    logs: 'logs',
    rolledBackAt: 'rolled_back_at',
    startedAt: 'started_at',
    appliedStepsCount: 'applied_steps_count',
  }

  const timestamp = new Date();

  const additionals: any= {
    id: `_prisma_migrations_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: "account_1607435487272_5nl561qt",
    createdBy: "request.decoded.user_id",
    createRequest: `request_${dataKey(6)}`,
  }

  Object.assign(input, additionals)
	
  let cols: any[] = []
  let values: any[] = []
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
        if (typeof(value) === "string"){
          value = "'"+value+"'";
        }
        values.push(value)
      }
  }


  let all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const cols_str = cols.join(", ");
  const values_str = values.join(", ")
  const all_cols_str = all_cols.join(", ")

  const insert_query = "INSERT INTO _prisma_migrations (" + cols_str +") values (" + values_str + ") returning " + all_cols_str + "";
  const result = await pool.query(insert_query);

  return result['rows']
}

