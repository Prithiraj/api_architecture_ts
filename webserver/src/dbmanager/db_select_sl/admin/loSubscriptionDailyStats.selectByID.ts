import pool from '../../dbconn';

export async function select_loSubscriptionDailyStats_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT lo_subscription_daily_stats.*, loSubscriptionIdloSubscription
          from lo_subscription_daily_stats 
          LEFT JOIN lo_subscription loSubscriptionIdloSubscription
          ON lo_subscription_daily_stats.lo_subscription_id = loSubscriptionIdloSubscription.id
          where lo_subscription_daily_stats.statsDate = $1
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
