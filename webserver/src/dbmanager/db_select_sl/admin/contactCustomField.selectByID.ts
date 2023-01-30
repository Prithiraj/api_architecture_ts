import pool from '../../dbconn';

export async function select_contactCustomField_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_custom_field.*, accountIdaccount, sectionIdcontactCustomFieldSection
          from contact_custom_field 
          LEFT JOIN account accountIdaccount
          ON contact_custom_field.account_id = accountIdaccount.id
          LEFT JOIN contact_custom_field_section sectionIdcontactCustomFieldSection
          ON contact_custom_field.section_id = sectionIdcontactCustomFieldSection.id
          where contact_custom_field.id = $1
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
