import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_bridgeContactLoan(input: any) {
  // procesor

  const table_cols: Record<string, string> = {
    contactId: 'contact_id',
    loanId: 'loan_id',
    accountId: 'account_id',
    assignedBy: 'assigned_by',
    assignTime: 'assign_time',
    assignRequest: 'assign_request',
    type: 'type',
    id: 'id',
  };

  const timestamp = new Date();

  const additionals: any = {
    id: `bridge_contact_loan_${dataKey(6)}`,
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
	  text: `INSERT INTO bridge_contact_loan (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
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

_${dataKey(6)}`,
  createTime: timestamp.toISOString(),
  updateTime: timestamp.toISOString(),
  accountId: "account_1607435487272_5nl561qt",
  createdBy: "request.decoded.user_id",
  createRequest: `request_${dataKey(6)}`,
} }}