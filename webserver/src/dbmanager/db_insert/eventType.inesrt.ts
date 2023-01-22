import dataKey from "../../utils/utils";
import pool from "../dbconn";

export async function insert_eventType(input: any) {

  // procesor

  const table_cols: any = {
    id: 'id',
    eventType: 'event_type',
    eventCategoryId: 'event_category_id',
    eventTypeDescription: 'event_type_description',
    dbAction: 'db_action',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }

  const timestamp = new Date();

  const additionals: any= {
    id: `event_type_${dataKey(6)}`,
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

  const insert_query = "INSERT INTO event_type (" + cols_str +") values (" + values_str + ") returning " + all_cols_str + "";
  const result = await pool.query(insert_query);

  return result['rows']
}

