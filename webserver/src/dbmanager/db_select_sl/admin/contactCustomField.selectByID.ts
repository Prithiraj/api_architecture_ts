import pool from '../../dbconn';

export async function select_contactCustomField_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_custom_field.*, accountIdcontactCustomField, sectionIdcontactCustomField
          from contact_custom_field 
          LEFT JOIN contact_custom_field accountIdcontactCustomField
          ON contact_custom_field.account_id = accountIdcontactCustomField.['id']
          LEFT JOIN contact_custom_field sectionIdcontactCustomField
          ON contact_custom_field.section_id = sectionIdcontactCustomField.['id']
          where contact_custom_field.['id'] = $1
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
