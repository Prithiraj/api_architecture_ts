import pool from '../../dbconn';

export async function select_templateDependency_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT template_dependency.*, accountIdaccount, templateIdtemplate, resourceIdtemplate, versionIdtemplateVersion
          from template_dependency 
          LEFT JOIN account accountIdaccount
          ON template_dependency.account_id = accountIdaccount.id
          LEFT JOIN template templateIdtemplate
          ON template_dependency.template_id = templateIdtemplate.id
          LEFT JOIN template resourceIdtemplate
          ON template_dependency.resource_id = resourceIdtemplate.id
          LEFT JOIN template_version versionIdtemplateVersion
          ON template_dependency.version_id = versionIdtemplateVersion.id
          where template_dependency.id = $1
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
