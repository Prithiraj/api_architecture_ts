import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_loLead(input: any) {
	// processors

  const table_cols: Record<string, string> = {
    id: 'id',	
	    assignmentId: 'assignment_id',	
	    billed: 'billed',	
	    boberdooId: 'boberdoo_id',	
	    callCenterService: 'call_center_service',	
	    companyId: 'company_id',	
	    creditStatus: 'credit_status',	
	    email: 'email',	
	    firstName: 'first_name',	
	    language: 'language',	
	    lastName: 'last_name',	
	    ownerId: 'owner_id',	
	    phone: 'phone',	
	    productId: 'product_id',	
	    provider: 'provider',	
	    vendor: 'vendor',	
	    secondaryPhone: 'secondary_phone',	
	    source: 'source',	
	    subscriptionId: 'subscription_id',	
	    price: 'price',	
	    transferPrice: 'transfer_price',	
	    transferStatus: 'transfer_status',	
	    leadType: 'lead_type',	
	    leadCategory: 'lead_category',	
	    addressCity: 'address.city',	
	    addressCountry: 'address.country',	
	    addressState: 'address.state',	
	    addressStreet: 'address.street',	
	    addressStreet2: 'address.street2',	
	    addressStreet3: 'address.street3',	
	    addressZip: 'address.zip',	
	    loanDownPayment: 'loan.down_payment',	
	    loanInterestRate: 'loan.interest_rate',	
	    loanMonthlyPayment: 'loan.monthly_payment',	
	    loanPurchasePrice: 'loan.purchase_price',	
	    loanTransactionType: 'loan.transaction_type',	
	    loanType: 'loan.type',	
	    createdBy: 'created_by',	
	    createRequest: 'create_request',	
	    createTime: 'create_time',	
	    updatedBy: 'updated_by',	
	    updateRequest: 'update_request',	
	    updateTime: 'update_time',	
	    accountId: 'account_id',	
	    loLeadRawId: 'lo_lead_raw_id',	
	    loanRange: 'loan_range',	
	    creditedPrice: 'credited_price',	
	    creditedTransferPrice: 'credited_transfer_price',	
	    refundedPrice: 'refunded_price',	
	    refundedTransferPrice: 'refunded_transfer_price',	
	    transferDate: 'transfer_date',	
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
  if ('createdBy' in table_cols) {
    createdBy = `and ${table_cols['createdBy']}=$${index + 2}`;
    values.push('account_info_a');
  }

  const update_query = {
	  text: `UPDATE public.lo_lead SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
