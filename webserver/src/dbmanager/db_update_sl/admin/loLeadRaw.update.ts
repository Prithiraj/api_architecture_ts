import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_loLeadRaw_admin(request: any) {
  // processors

  const input = request.body;

  const table_cols: Record<string, string> = {
    id: 'id',
    accountId: 'account_id',
    cost: 'cost',
    allowedTimesSold: 'allowed_times_sold',
    returnHashType: 'return_hash_type',
    returnHashValueType: 'return_hash_value_type',
    skipPartnerId: 'skip_partner_id',
    returnBestPrice: 'return_best_price',
    srcId: 'src_id',
    type: 'type',
    testLead: 'test_lead',
    skipXsl: 'skip_xsl',
    matchWithPartnerId: 'match_with_partner_id',
    redirectUrl: 'redirect_url',
    ipAddress: 'ip_address',
    src: 'src',
    landingPage: 'landing_page',
    subId: 'sub_id',
    pubId: 'pub_id',
    optout: 'optout',
    uniqueIdentifier: 'unique_identifier',
    userAgent: 'user_agent',
    tcpaConsent: 'tcpa_consent',
    tcpaLanguage: 'tcpa_language',
    trustedFormUrl: 'trusted_form_url',
    leadidToken: 'leadid_token',
    firstName: 'first_name',
    lastName: 'last_name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    primaryPhone: 'primary_phone',
    secondaryPhone: 'secondary_phone',
    email: 'email',
    estimatedPurchasePrice: 'estimated_purchase_price',
    downPayment: 'down_payment',
    foundHome: 'found_home',
    movingDate: 'moving_date',
    newPropertyZip: 'new_property_zip',
    loanType: 'loan_type',
    productType: 'product_type',
    cashOutAmount: 'cash_out_amount',
    dob: 'dob',
    propertyType: 'property_type',
    propertyUse: 'property_use',
    refiGoal: 'refi_goal',
    workingWithAnAgent: 'working_with_an_agent',
    bankruptcyLast7Years: 'bankruptcy_last_7_years',
    foreclosureLast7Years: 'foreclosure_last_7_years',
    creditStatus: 'credit_status',
    loanValue: 'loan_value',
    homeValue: 'home_value',
    firstMortgageBalance: 'first_mortgage_balance',
    firstMortgageRate: 'first_mortgage_rate',
    secondMortgage: 'second_mortgage',
    secondMortgageBalance: 'second_mortgage_balance',
    secondMortgageRate: 'second_mortgage_rate',
    ltv: 'ltv',
    ssn: 'ssn',
    mode: 'mode',
    status: 'status',
    createRequest: 'create_request',
    createTime: 'create_time',
    createdBy: 'created_by',
    updateRequest: 'update_request',
    updateTime: 'update_time',
    updatedBy: 'updated_by',
    reason: 'reason',
    loLeadId: 'lo_lead_id',
    extraData: 'extra_data',
    subscriptionId: 'subscription_id',
    billingStatus: 'billing_status',
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
	  text: `UPDATE public.lo_lead_raw SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
