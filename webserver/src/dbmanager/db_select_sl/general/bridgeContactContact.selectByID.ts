import pool from '../../dbconn';

export async function select_bridgeContactContact_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_contact.*, contactIdbridgeContactContact, accountIdbridgeContactContact
          from bridge_contact_contact 
          LEFT JOIN bridge_contact_contact contactIdbridgeContactContact
          ON bridge_contact_contact.contact_id = contactIdbridgeContactContact.['contact_id', 'assigned_to']
          LEFT JOIN bridge_contact_contact accountIdbridgeContactContact
          ON bridge_contact_contact.account_id = accountIdbridgeContactContact.['contact_id', 'assigned_to']
          where bridge_contact_contact.['contactId', 'assignedTo'] = $1 and bridge_contact_contact.created_by = $2
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
