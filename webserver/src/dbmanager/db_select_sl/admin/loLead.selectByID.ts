import pool from '../../dbconn';

export async function select_loLead_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT lo_lead.*, subscriptionIdloSubscription, loLeadRawIdloLeadRaw
          from lo_lead 
          LEFT JOIN lo_subscription subscriptionIdloSubscription
          ON lo_lead.subscription_id = subscriptionIdloSubscription.id
          LEFT JOIN lo_lead_raw loLeadRawIdloLeadRaw
          ON lo_lead.lo_lead_raw_id = loLeadRawIdloLeadRaw.id
          where lo_lead.id = $1
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
