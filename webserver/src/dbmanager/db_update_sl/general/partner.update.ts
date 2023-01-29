import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_partner(request: any) {
	// processors
	
  const input = request.body;

  const table_cols: Record<string, string> = {
    id: 'id',
	    accountId: 'account_id',
	    organizationId: 'organization_id',
	    type: 'type',
	    firstName: 'first_name',
	    lastName: 'last_name',
	    personalEmail: 'personal_email',
	    workEmail: 'work_email',
	    mobilePhone: 'mobile_phone',
	    workPhone: 'work_phone',
	    createdBy: 'created_by',
	    createTime: 'create_time',
	    createRequest: 'create_request',
	    updatedBy: 'updated_by',
	    updateTime: 'update_time',
	    updateRequest: 'update_request',
	    addressId: 'address_id',
	  };

  const timestamp = new Date();

  const additionals: any = {
    updateTime: timestamp.toISOString(),
    updateRequest: request.request_id,
    updatedBy: request.decoded.user_id,
  };

  const pk = table_cols.id

  Object.assign(input, additionals);

  const key_values: any[] = [];
  const values: any[] = [];
  const id = input.id;
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
    values.push(request.decoded.user_id);
  }

  const update_query = {
    text: `UPDATE public.partner SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
    values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
