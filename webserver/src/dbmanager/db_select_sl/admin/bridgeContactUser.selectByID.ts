import pool from '../../dbconn';

export async function select_bridgeContactUser_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_user.*, contactIdcontact, userIduser, accountIdaccount
          from bridge_contact_user 
          LEFT JOIN contact contactIdcontact
          ON bridge_contact_user.contact_id = contactIdcontact.id
          LEFT JOIN user userIduser
          ON bridge_contact_user.user_id = userIduser.id
          LEFT JOIN account accountIdaccount
          ON bridge_contact_user.account_id = accountIdaccount.id
          where bridge_contact_user.id = $1
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
