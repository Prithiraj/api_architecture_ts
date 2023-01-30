import pool from '../../dbconn';

export async function select_contactOtherAssociates_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_other_associates.*, contactIdcontact
          from contact_other_associates 
          LEFT JOIN contact contactIdcontact
          ON contact_other_associates.contact_id = contactIdcontact.id
          where contact_other_associates.id = $1
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
