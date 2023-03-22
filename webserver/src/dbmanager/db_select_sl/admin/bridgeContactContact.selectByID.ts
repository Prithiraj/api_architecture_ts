import pool from '../../dbconn';

export async function select_bridgeContactContact_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_contact.*, contactIdbridgeContactContact, accountIdbridgeContactContact
          from bridge_contact_contact 
          LEFT JOIN bridge_contact_contact contactIdbridgeContactContact
          ON bridge_contact_contact.contact_id = contactIdbridgeContactContact.['contact_id', 'assigned_to']
          LEFT JOIN bridge_contact_contact accountIdbridgeContactContact
          ON bridge_contact_contact.account_id = accountIdbridgeContactContact.['contact_id', 'assigned_to']
          where bridge_contact_contact.['contactId', 'assignedTo'] = $1
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
