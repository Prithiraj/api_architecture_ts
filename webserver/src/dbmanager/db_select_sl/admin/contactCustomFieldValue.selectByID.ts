import pool from '../../dbconn';

export async function select_contactCustomFieldValue_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_custom_field_value.*, accountIdcontactCustomFieldValue, contactIdcontactCustomFieldValue, customFieldIdcontactCustomFieldValue
          from contact_custom_field_value 
          LEFT JOIN contact_custom_field_value accountIdcontactCustomFieldValue
          ON contact_custom_field_value.account_id = accountIdcontactCustomFieldValue.['contact_id', 'custom_field_id']
          LEFT JOIN contact_custom_field_value contactIdcontactCustomFieldValue
          ON contact_custom_field_value.contact_id = contactIdcontactCustomFieldValue.['contact_id', 'custom_field_id']
          LEFT JOIN contact_custom_field_value customFieldIdcontactCustomFieldValue
          ON contact_custom_field_value.custom_field_id = customFieldIdcontactCustomFieldValue.['contact_id', 'custom_field_id']
          where contact_custom_field_value.['contactId', 'customFieldId'] = $1
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
