import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_templateDependency_admin(request: any) {
  // processors

  const input = request.body;

  const table_cols: Record<string, string> = {
    id: 'id',
    accountId: 'account_id',
    templateId: 'template_id',
    resourceId: 'resource_id',
    createTime: 'create_time',
    createdBy: 'created_by',
    updateRequest: 'update_request',
    updateTime: 'update_time',
    updatedBy: 'updated_by',
    createRequest: 'create_request',
    versionId: 'version_id',
  };

  const timestamp = new Date();

  const additionals: any = {
    updateTime: timestamp.toISOString(),
    updateRequest: request.request_id,
    updatedBy: request.decoded.user_id,
  };

  const pk = table_cols.t

  Object.assign(input, additionals);

  const key_values: any[] = [];
  const values: any[] = [];
  const id = input.t;
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
	  text: `UPDATE public.template_dependency SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
