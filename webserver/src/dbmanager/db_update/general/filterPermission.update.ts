import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_filterPermission(input: any) {
	// processors

  const table_cols: Record<string, string> = {
    id: 'id',	
	    ownerAccountId: 'owner_account_id',	
	    sharedAccountId: 'shared_account_id',	
	    createRequest: 'create_request',	
	    createTime: 'create_time',	
	    createdBy: 'created_by',	
	    updateRequest: 'update_request',	
	    updateTime: 'update_time',	
	    updatedBy: 'updated_by',	
	    contactFilterId: 'contact_filter_id',	
	  };

  const timestamp = new Date();

  const additionals: any = {
    updateTime: timestamp.toISOString(),
    updateRequest: `request_${dataKey(6)}`,
    updatedBy: 'request.request_id',
  };

  const pk = table_cols.id

  Object.assign(input, additionals);

  const key_values: any[] = [];
  const values: any[] = []
  const id = input.id
  let index = 0;
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols && key !== 'id') {
      ++index;
      key_values.push(`${table_cols[key]} = $${index}`);
      values.push(value);
    }
  }

  values.push(id);

  const key_value_placeholders = key_values.join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }
  
  const all_cols_str = all_cols.join(', ');
  
  let createdBy = '';
  if ('createdBy' in table_cols) {
    createdBy = `and ${table_cols['createdBy']}=$${index + 2}`;
    values.push('account_info_a');
  }

  const update_query = {
	  text: `UPDATE public.filter_permission SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
