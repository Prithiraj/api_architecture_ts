import pool from '../../dbconn';

export async function select_contactOtherAssociates_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_other_associates.*, contactIdcontact
          from contact_other_associates 
          LEFT JOIN contact contactIdcontact
          ON contact_other_associates.contact_id = contactIdcontact.id
          where contact_other_associates.id = $1 and contact_other_associates.created_by = $2
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
