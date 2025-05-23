import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_bookCopies_admin(request: any) {
  // processors

  const input = request.body;

  const table_cols: Record<string, string> = {
    bookId: 'book_id',
    copyNumber: 'copy_number',
    status: 'status',
  };

  const timestamp = new Date();

  const additionals: any = {
    updateTime: timestamp.toISOString(),
    updateRequest: 'request.request_id',
    updatedBy: 'request.decoded.user_id',
  };

  const pk: string[] = [table_cols.bookId, table_cols.copyNumber, ]

  Object.assign(input, additionals);
  const key_values: any[] = [];
  let values: any[] = [];
  let index = 0;
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols && !pk.includes(key)) {
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

  values = values.concat([input.bookId, input.copyNumber, ])

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

  let pk_str: string = '';
  for (let i = 0; i < pk.length; i++) {
    index = index + 1
    if (i == 0) {
      pk_str += `${pk[i]}=$${index}`;
    } else if (i >= 1) {
      pk_str += ` and ${pk[i]}=$${index}`;
    }
  } 

  let createdBy = '';

  const update_query = {
	  text: `UPDATE public.book_copies SET ${key_value_placeholders} WHERE ${pk_str} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
