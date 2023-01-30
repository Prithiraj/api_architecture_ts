import pool from '../../dbconn';

export async function select_bridgeContactTag_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_tag.*, contactIdcontact, tagIdcontactTag, accountIdaccount
          from bridge_contact_tag 
          LEFT JOIN contact contactIdcontact
          ON bridge_contact_tag.contact_id = contactIdcontact.id
          LEFT JOIN contact_tag tagIdcontactTag
          ON bridge_contact_tag.tag_id = tagIdcontactTag.id
          LEFT JOIN account accountIdaccount
          ON bridge_contact_tag.account_id = accountIdaccount.id
          where bridge_contact_tag.id = $1 and bridge_contact_tag.created_by = $2
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
