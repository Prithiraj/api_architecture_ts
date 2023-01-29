import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_loan(request: any) {
  // procesor
  const input = request.body;

  const table_cols: Record<string, string> = {
    id: 'id',
    accountId: 'account_id',
    loanOfficerId: 'loan_officer_id',
    addressId: 'address_id',
    purpose: 'purpose',
    product: 'product',
    amount: 'amount',
    interestRate: 'interest_rate',
    term: 'term',
    downPayment: 'down_payment',
    remainingTerm: 'remaining_term',
    notes: 'notes',
    mortgageInsurance: 'mortgage_insurance',
    status: 'status',
    closingDate: 'closing_date',
    createdBy: 'created_by',
    createTime: 'create_time',
    createRequest: 'create_request',
    updatedBy: 'updated_by',
    updateTime: 'update_time',
    updateRequest: 'update_request',
    remainingValue: 'remaining_value',
    amortization: 'amortization',
    desiredOrCurrent: 'desired_or_current',
    desiredCashOutAmount: 'desired_cash_out_amount',
    desiredDownPayment: 'desired_down_payment',
    loanPropertyType: 'loan_property_type',
    loanUnits: 'loan_units',
    timeline: 'timeline',
    loanPropertyOccupancy: 'loan_property_occupancy',
    loanPropertyValue: 'loan_property_value',
    loanType: 'loan_type',
  };

  const timestamp = new Date();

  const additionals: any = {
    id: `loan_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: request.decoded.account_id,
    createdBy: request.decoded.user_id,
    createRequest: request.request_id,
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
	  text: `INSERT INTO loan (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
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

