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
          SELECT bridge_contact_partner.*, accountIdaccount, contactIdcontact, partnerIdpartner
          from bridge_contact_partner 
          LEFT JOIN account accountIdaccount
          ON bridge_contact_partner.account_id = accountIdaccount.id
          LEFT JOIN contact contactIdcontact
          ON bridge_contact_partner.contact_id = contactIdcontact.id
          LEFT JOIN partner partnerIdpartner
          ON bridge_contact_partner.partner_id = partnerIdpartner.id
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
