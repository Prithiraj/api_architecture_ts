import pool from '../../dbconn';

export async function select_contactCustomField_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_custom_field.*, accountIdcontactCustomField, sectionIdcontactCustomField
          from contact_custom_field 
          LEFT JOIN contact_custom_field accountIdcontactCustomField
          ON contact_custom_field.account_id = accountIdcontactCustomField.['id']
          LEFT JOIN contact_custom_field sectionIdcontactCustomField
          ON contact_custom_field.section_id = sectionIdcontactCustomField.['id']
          where contact_custom_field.['id'] = $1 and contact_custom_field.created_by = $2
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
