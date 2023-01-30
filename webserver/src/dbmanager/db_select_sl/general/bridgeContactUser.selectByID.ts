import pool from '../../dbconn';

export async function select_bridgeContactUser_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where bridge_contact_user.id = $1 and bridge_contact_user.created_by = $2
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
