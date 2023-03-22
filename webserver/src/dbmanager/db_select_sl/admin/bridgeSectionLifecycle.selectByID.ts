import pool from '../../dbconn';

export async function select_bridgeSectionLifecycle_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_section_lifecycle.*, accountIdbridgeSectionLifecycle, customFieldSectionIdbridgeSectionLifecycle, lifecycleIdbridgeSectionLifecycle
          from bridge_section_lifecycle 
          LEFT JOIN bridge_section_lifecycle accountIdbridgeSectionLifecycle
          ON bridge_section_lifecycle.account_id = accountIdbridgeSectionLifecycle.['id']
          LEFT JOIN bridge_section_lifecycle customFieldSectionIdbridgeSectionLifecycle
          ON bridge_section_lifecycle.custom_field_section_id = customFieldSectionIdbridgeSectionLifecycle.['id']
          LEFT JOIN bridge_section_lifecycle lifecycleIdbridgeSectionLifecycle
          ON bridge_section_lifecycle.lifecycle_id = lifecycleIdbridgeSectionLifecycle.['id']
          where bridge_section_lifecycle.['id'] = $1
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
