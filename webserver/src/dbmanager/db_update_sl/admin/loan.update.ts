import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_loan_admin(request: any) {
  // processors

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
    if (key in table_cols && key !== pk) {
      ++index;
      key_values.push(`${table_cols[key]} = $${index}`);
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
	  text: `UPDATE public.loan SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
