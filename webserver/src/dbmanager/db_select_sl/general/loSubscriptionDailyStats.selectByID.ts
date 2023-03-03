import pool from '../../dbconn';

export async function select_loSubscriptionDailyStats_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT lo_subscription_daily_stats.*, loSubscriptionIdloSubscriptionDailyStats
          from lo_subscription_daily_stats 
          LEFT JOIN lo_subscription_daily_stats loSubscriptionIdloSubscriptionDailyStats
          ON lo_subscription_daily_stats.lo_subscription_id = loSubscriptionIdloSubscriptionDailyStats.lo_subscription_id
          where lo_subscription_daily_stats.loSubscriptionId = $1 and lo_subscription_daily_stats.created_by = $2
        ) t;`,
    values: values,
  };
  try {
    const result = await pool.query(select_query);
    return result.rows[0].row_to_json;
  }
  catch (err: any) {
    throw err;
  }
}
