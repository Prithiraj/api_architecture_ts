import pool from '../../dbconn';

export async function select_bridgeContactUser_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_user.*, contactIdbridgeContactUser, userIdbridgeContactUser, accountIdbridgeContactUser
          from bridge_contact_user 
          LEFT JOIN bridge_contact_user contactIdbridgeContactUser
          ON bridge_contact_user.contact_id = contactIdbridgeContactUser.['contact_id', 'user_id']
          LEFT JOIN bridge_contact_user userIdbridgeContactUser
          ON bridge_contact_user.user_id = userIdbridgeContactUser.['contact_id', 'user_id']
          LEFT JOIN bridge_contact_user accountIdbridgeContactUser
          ON bridge_contact_user.account_id = accountIdbridgeContactUser.['contact_id', 'user_id']
          where bridge_contact_user.['contactId', 'userId'] = $1
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
