import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_eventType(request: any) {
  // procesor
  const input = request.body;

  const table_cols: any = {
    id: 'id',
    eventType: 'event_type',
    eventCategoryId: 'event_category_id',
    eventTypeDescription: 'event_type_description',
    dbAction: 'db_action',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  };

  const timestamp = new Date();

  const additionals: any = {
    id: `event_type_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: request.decoded.account_id,
    createdBy: request.decoded.user_id,
    createRequest: request.request_id,
  };

  Object.assign(input, additionals);

  const cols: any[] = []
  const values: any[] = []
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
      values.push(value);
      }
  }

  const cols_str = cols.join(', ');
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const all_cols_str = all_cols.join(', ');
  const insert_query = {
	  text: `INSERT INTO eventType (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
	  values: values
  } 

  try{
	  const result = await pool.query(insert_query);
	  return result.rows;
  } catch (err: any) {
    if (err.code === 23503) {
      throw 'account_id doesn\'t exist';}
	  else {
      throw err;
    }
  }
}

