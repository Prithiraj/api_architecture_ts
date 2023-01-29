import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_contactReminder_admin(input: any) {
	// processors

  const table_cols: Record<string, string> = {
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
	  text: `UPDATE public.contact_reminder SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
