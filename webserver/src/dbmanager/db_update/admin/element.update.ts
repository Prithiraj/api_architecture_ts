import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_element_admin(input: any) {
	// processors

  const table_cols: Record<string, string> = {
    accountId: 'account_id',	
	    templateId: 'template_id',	
	    latestTemplate: 'latest_template',	
	    id: 'id',	
	    name: 'name',	
	    data: 'data',	
	    createTime: 'create_time',	
	    type: 'type',	
	    createdBy: 'created_by',	
	    updateRequest: 'update_request',	
	    updateTime: 'update_time',	
	    updatedBy: 'updated_by',	
	    createRequest: 'create_request',	
	    latestVersionId: 'latest_version_id',	
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

  const update_query = {
	  text: `UPDATE public.element SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
