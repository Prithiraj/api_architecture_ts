import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_bridgeContactLoan(request: any) {
  // procesor
  const input = request.body;

  const table_cols: any = {
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
    accountId: request.decoded.account_id,
    createdBy: request.decoded.user_id,
    createRequest: request.request_id,
  };

  Object.assign(input, additionals);

  const cols: any[] = [];
  const values: any[] = [];
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
        if (typeof(value) === 'string'){
          value = "'"+value+"'";
        }
        values.push(value);
      }
  }

  const all_cols: any[] = [];
  for (const [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const cols_str = cols.join(', ');
  const values_str = values.join(', ');
  const all_cols_str = all_cols.join(', ');

  const insert_query = `INSERT INTO bridge_contact_loan (${cols_str}) values (${values_str}) returning ${all_cols_str}`;
  const result = await pool.query(insert_query);

  return result.rows;
}

