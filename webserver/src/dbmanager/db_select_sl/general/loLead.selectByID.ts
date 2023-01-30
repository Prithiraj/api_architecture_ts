import pool from '../../dbconn';

export async function select_loLead_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT lo_lead.*, subscriptionIdloSubscription, loLeadRawIdloLeadRaw
          from lo_lead 
          LEFT JOIN lo_subscription subscriptionIdloSubscription
          ON lo_lead.subscription_id = subscriptionIdloSubscription.id
          LEFT JOIN lo_lead_raw loLeadRawIdloLeadRaw
          ON lo_lead.lo_lead_raw_id = loLeadRawIdloLeadRaw.id
          where lo_lead.id = $1 and lo_lead.created_by = $2
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
