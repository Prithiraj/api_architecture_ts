import pool from '../../dbconn';

export async function select_bridgeContactPartner_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
          where bridge_contact_partner.id = $1
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
