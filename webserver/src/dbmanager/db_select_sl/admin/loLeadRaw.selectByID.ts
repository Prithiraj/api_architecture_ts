import pool from '../../dbconn';

export async function select_loLeadRaw_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT lo_lead_raw.*, subscriptionIdloSubscription
          from lo_lead_raw 
          LEFT JOIN lo_subscription subscriptionIdloSubscription
          ON lo_lead_raw.subscription_id = subscriptionIdloSubscription.id
          where lo_lead_raw.id = $1
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
