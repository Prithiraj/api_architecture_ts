import dataKey from "../../utils/utils";
import pool from "../dbconn";

export async function insert_loLead(input: any) {

  // procesor

  const table_cols: any = {
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
  }

  const timestamp = new Date();

  const additionals: any= {
    id: `lo_lead_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: "account_1607435487272_5nl561qt",
    createdBy: "request.decoded.user_id",
    createRequest: `request_${dataKey(6)}`,
  }

  Object.assign(input, additionals)
	
  const cols: any[] = []
  const values: any[] = []
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
      values.push(value);
      }
  }

  const cols_str = cols.join(', ');
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const all_cols_str = all_cols.join(', ');
  const insert_query = {
	text: `INSERT INTO loLead (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
	values: values
  } 

  try{
	const result = await pool.query(insert_query);
	return result.rows;
  } catch (err: any) {
	if (err.code === 23503) {
      throw 'account_id doesn\'t exist';}
	else {
      throw err;
    }
  }
}
