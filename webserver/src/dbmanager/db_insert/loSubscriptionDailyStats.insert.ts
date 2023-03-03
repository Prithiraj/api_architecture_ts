import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_loSubscriptionDailyStats(input: any) {
  // procesor

  const table_cols: Record<string, string> = {
    loSubscriptionId: 'lo_subscription_id',
    totalMatchAmount: 'total_match_amount',
    totalTransferAmount: 'total_transfer_amount',
    totalLeadsMatched: 'total_leads_matched',
    totalLeadsTransfered: 'total_leads_transfered',
    createdBy: 'created_by',
    createRequest: 'create_request',
    createTime: 'create_time',
    updatedBy: 'updated_by',
    updateRequest: 'update_request',
    updateTime: 'update_time',
    statsDate: 'stats_date',
  };

  const timestamp = new Date();

  const additionals: any = {
    loSubscriptionId: `lo_subscription_daily_stats_${dataKey(6)}`,
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
	  text: `INSERT INTO lo_subscription_daily_stats (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
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

