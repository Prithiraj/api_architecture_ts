import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_loSubscription_admin(request: any) {
  // processors

  const input = request.body;

  const table_cols: Record<string, string> = {
    id: 'id',
    stripeSubscription: 'stripe_subscription',
    stripeStatus: 'stripe_status',
    stripePaymentIntent: 'stripe_payment_intent',
    accountId: 'account_id',
    autoBilling: 'auto_billing',
    boberdooId: 'boberdoo_id',
    boberdooBalance: 'boberdoo_balance',
    bundleTitle: 'bundle_title',
    cancelTime: 'cancel_time',
    companyId: 'company_id',
    createdBy: 'created_by',
    createRequest: 'create_request',
    createTime: 'create_time',
    currentStep: 'current_step',
    dailyBudgetLimit: 'daily_budget_limit',
    dailyUnitLimit: 'daily_unit_limit',
    deactivateTime: 'deactivate_time',
    deactivateReason: 'deactivate_reason',
    finishTime: 'finish_time',
    inactive: 'inactive',
    price: 'price',
    priceSubscriptionItemId: 'price_subscription_item_id',
    productId: 'product_id',
    transferPrice: 'transfer_price',
    transferPriceSubscriptionItemId: 'transfer_price_subscription_item_id',
    updatedBy: 'updated_by',
    updateRequest: 'update_request',
    updateTime: 'update_time',
    userId: 'user_id',
    activeLeadTransfer: 'active_lead_transfer',
    agentState: 'agent_state',
    callCenterService: 'call_center_service',
    creditStatus: 'credit_status',
    scheduleDays: 'schedule.days',
    scheduleFrom: 'schedule.from',
    scheduleTo: 'schedule.to',
    timeZone: 'time_zone',
    primaryPhoneType: 'primary_phone_type',
    primaryPhone: 'primary_phone',
    primaryPhoneVerified: 'primary_phone_verified',
    secondaryPhoneType: 'secondary_phone_type',
    secondaryPhone: 'secondary_phone',
    secondaryPhoneVerified: 'secondary_phone_verified',
    alertList: 'alert_list',
    addressCity: 'address.city',
    addressCountry: 'address.country',
    addressState: 'address.state',
    addressStreet: 'address.street',
    addressStreet2: 'address.street2',
    addressStreet3: 'address.street3',
    addressZip: 'address.zip',
    preferredmeetingplaceCity: 'preferred_meeting_place.city',
    preferredmeetingplaceCountry: 'preferred_meeting_place.country',
    preferredmeetingplaceState: 'preferred_meeting_place.state',
    preferredmeetingplaceStreet: 'preferred_meeting_place.street',
    preferredmeetingplaceStreet2: 'preferred_meeting_place.street2',
    preferredmeetingplaceStreet3: 'preferred_meeting_place.street3',
    preferredmeetingplaceZip: 'preferred_meeting_place.zip',
    county: 'county',
    preferredcommunicationscheduleDays: 'preferred_communication_schedule.days',
    preferredcommunicationscheduleFrom: 'preferred_communication_schedule.from',
    preferredcommunicationscheduleTo: 'preferred_communication_schedule.to',
    infoEmail: 'info_email',
    infoPhone: 'info_phone',
    infoName: 'info_name',
    infoWebsite: 'info_website',
    leadType: 'lead_type',
    transactionType: 'transaction_type',
    loanRanges: 'loan_ranges',
    loanType: 'loan_type',
    vendors: 'vendors',
    totalMatchAmount: 'total_match_amount',
    totalTransferAmount: 'total_transfer_amount',
    totalLeadsMatched: 'total_leads_matched',
    totalLeadsTransfered: 'total_leads_transfered',
    totalCredited: 'total_credited',
    totalRefunded: 'total_refunded',
    leadCategory: 'lead_category',
    weight: 'weight',
    rmpptBuyerId: 'rmppt_buyer_id',
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
	  text: `UPDATE public.lo_subscription SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
