import pool from '../../dbconn';

export async function select_contactCustomFieldValue_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where contact_custom_field_value.id = $1 and contact_custom_field_value.created_by = $2
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
