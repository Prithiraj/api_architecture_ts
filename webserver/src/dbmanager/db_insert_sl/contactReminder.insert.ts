import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_contactReminder(request: any) {
  // procesor
  const input = request.body;

  const table_cols: any = {
    id: 'id',
    accountId: 'account_id',
    contactId: 'contact_id',
    userId: 'user_id',
    type: 'type',
    title: 'title',
    description: 'description',
    dueDate: 'due_date',
    executeAt: 'execute_at',
    reminderData: 'reminder_data',
    active: 'active',
    createdBy: 'created_by',
    createTime: 'create_time',
    updatedBy: 'updated_by',
    updateTime: 'update_time',
  };

  const timestamp = new Date();

  const additionals: any = {
    id: `contact_reminder_${dataKey(6)}`,
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
	  text: `INSERT INTO contactReminder (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
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

