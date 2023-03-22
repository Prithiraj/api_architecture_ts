import pool from '../../dbconn';

export async function select_contactTag_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_tag.*, accountIdcontactTag
          from contact_tag 
          LEFT JOIN contact_tag accountIdcontactTag
          ON contact_tag.account_id = accountIdcontactTag.['id']
          where contact_tag.['id'] = $1
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
