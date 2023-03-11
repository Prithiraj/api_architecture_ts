import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_bridgeContactContact_admin(request: any) {
  // processors

  const input = request.body;

  const table_cols: Record<string, string> = {
    contactId: 'contact_id',
    accountId: 'account_id',
    assignedTo: 'assigned_to',
    relationship: 'relationship',
    assignedBy: 'assigned_by',
    assignTime: 'assign_time',
    assignRequest: 'assign_request',
    id: 'id',
  };

  const timestamp = new Date();

  const additionals: any = {
    updateTime: timestamp.toISOString(),
    updateRequest: request.request_id,
    updatedBy: request.decoded.user_id,
  };

  const pk = table_cols.tt

  Object.assign(input, additionals);

  const key_values: any[] = [];
  const values: any[] = [];
  const id = input.tt;
  let index = 0;
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols && key !== pk) {
      ++index;
      const table_db_key = table_cols[key];
      if (table_db_key.indexOf('.') > -1) {
        key_values.push(`"${table_db_key}" = $${index}`);
      }
      else {
        key_values.push(`${table_db_key} = $${index}`);
      }
      values.push(value);
    }
  }

  values.push(id);

  const key_value_placeholders = key_values.join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    if (value.indexOf('.') > -1) {
      all_cols.push(`"${value}"`);
    }
    else {
      all_cols.push(value);
    }
  }
  
  const all_cols_str = all_cols.join(', ');
  
  let createdBy = '';

  const update_query = {
	  text: `UPDATE public.bridge_contact_contact SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
