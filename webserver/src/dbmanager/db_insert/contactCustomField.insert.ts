import dataKey from '../../utils/utils';
import pool from '../dbconn';
import { contactCustomField_ajv } from '../../schemas/mapper_ajv'

export async function insert_contactCustomField(input: any) {
  // procesor

  const table_cols: Record<string, string> = {
    id: 'id',
    accountId: 'account_id',
    name: 'name',
    type: 'type',
    order: 'order',
    purpose: 'purpose',
    createdBy: 'created_by',
    createTime: 'create_time',
    createRequest: 'create_request',
    updatedBy: 'updated_by',
    updateTime: 'update_time',
    updateRequest: 'update_request',
    sectionId: 'section_id',
    isDeleted: 'is_deleted',
  };

  const timestamp = new Date();

  let pk_value: string|number = `contact_custom_field_${dataKey(6)}`;
  const type_of_pk = contactCustomField_ajv.id.api.type;
  if (type_of_pk === 'integer' || type_of_pk === 'number') {
    pk_value = Math.floor(Math.random() * 100000);
  }

  const additionals: any = {
    id: `${pk_value}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: "account_1607435487272_5nl561qt",
    createdBy: "request.decoded.user_id",
    createRequest: `request_${dataKey(6)}`,
  };

  Object.assign(input, additionals);

  const cols: any[] = [];
  const values: any[] = [];
  for (const [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      const table_db_key = table_cols[key];
      if (table_db_key.indexOf('.') > -1) {
        cols.push(`"${table_db_key}"`);
      }
      else {
        cols.push(table_db_key);
      }
      values.push(value);
    }
  }

  const cols_str = cols.join(', ');
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
  const all_cols: any[] = [];
  for (const [key, value] of Object.entries(table_cols)) {
    if (value.indexOf('.') > -1) {
      all_cols.push(`"${value}"`);
    }
    else {
      all_cols.push(value);
    }
  }

  const all_cols_str = all_cols.join(', ');
  const insert_query = {
	  text: `INSERT INTO contact_custom_field (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
	  values: values
  };


  try{
    const result = await pool.query(insert_query);
    return result.rows;
  } catch (err: any) {
    if (err.code === 23503) {
      throw 'account_id doesn\'t exist';
    }
	  else {
      throw err;
    }
  }
}

