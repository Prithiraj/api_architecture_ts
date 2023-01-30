import pool from '../../dbconn';

export async function select_bridgeSectionLifecycle_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where bridge_section_lifecycle.id = $1 and bridge_section_lifecycle.created_by = $2
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
