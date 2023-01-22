import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_loLeadRaw(request: any) {
  // procesor
  const input = request.body;

  const table_cols: any = {
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
    id: `lo_lead_raw_${dataKey(6)}`,
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

  const insert_query = `INSERT INTO lo_lead_raw (${cols_str}) values (${values_str}) returning ${all_cols_str}`;
  const result = await pool.query(insert_query);

  return result.rows;
}

