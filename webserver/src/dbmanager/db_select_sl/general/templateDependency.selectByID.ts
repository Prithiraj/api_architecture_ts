import pool from '../../dbconn';

export async function select_templateDependency_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where template_dependency.id = $1 and template_dependency.created_by = $2
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
