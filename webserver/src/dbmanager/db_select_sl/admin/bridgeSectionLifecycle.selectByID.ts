import pool from '../../dbconn';

export async function select_bridgeSectionLifecycle_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_section_lifecycle.*, accountIdaccount, customFieldSectionIdcontactCustomFieldSection, lifecycleIdcontactStatusLifecycle
          from bridge_section_lifecycle 
          LEFT JOIN account accountIdaccount
          ON bridge_section_lifecycle.account_id = accountIdaccount.id
          LEFT JOIN contact_custom_field_section customFieldSectionIdcontactCustomFieldSection
          ON bridge_section_lifecycle.custom_field_section_id = customFieldSectionIdcontactCustomFieldSection.id
          LEFT JOIN contact_status_lifecycle lifecycleIdcontactStatusLifecycle
          ON bridge_section_lifecycle.lifecycle_id = lifecycleIdcontactStatusLifecycle.id
          where bridge_section_lifecycle.id = $1
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
