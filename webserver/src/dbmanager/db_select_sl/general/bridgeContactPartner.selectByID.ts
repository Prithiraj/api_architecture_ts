import pool from '../../dbconn';

export async function select_bridgeContactPartner_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_partner.*, accountIdbridgeContactPartner, contactIdbridgeContactPartner, partnerIdbridgeContactPartner
          from bridge_contact_partner 
          LEFT JOIN bridge_contact_partner accountIdbridgeContactPartner
          ON bridge_contact_partner.account_id = accountIdbridgeContactPartner.id
          LEFT JOIN bridge_contact_partner contactIdbridgeContactPartner
          ON bridge_contact_partner.contact_id = contactIdbridgeContactPartner.id
          LEFT JOIN bridge_contact_partner partnerIdbridgeContactPartner
          ON bridge_contact_partner.partner_id = partnerIdbridgeContactPartner.id
          where bridge_contact_partner.id = $1 and bridge_contact_partner.created_by = $2
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
