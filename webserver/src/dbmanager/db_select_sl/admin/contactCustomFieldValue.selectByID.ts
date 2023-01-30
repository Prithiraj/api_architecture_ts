import pool from '../../dbconn';

export async function select_contactCustomFieldValue_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_custom_field_value.*, accountIdaccount, contactIdcontact, customFieldIdcontactCustomField
          from contact_custom_field_value 
          LEFT JOIN account accountIdaccount
          ON contact_custom_field_value.account_id = accountIdaccount.id
          LEFT JOIN contact contactIdcontact
          ON contact_custom_field_value.contact_id = contactIdcontact.id
          LEFT JOIN contact_custom_field customFieldIdcontactCustomField
          ON contact_custom_field_value.custom_field_id = customFieldIdcontactCustomField.id
          where contact_custom_field_value.id = $1
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
