import pool from '../../dbconn';

export async function select_contactPermission_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_permission.*, contactIdcontact
          from contact_permission 
          LEFT JOIN contact contactIdcontact
          ON contact_permission.contact_id = contactIdcontact.id
          where contact_permission.id = $1
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
