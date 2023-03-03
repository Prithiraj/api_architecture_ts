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
          SELECT template_dependency.*, accountIdtemplateDependency, templateIdtemplateDependency, resourceIdtemplateDependency, versionIdtemplateDependency
          from template_dependency 
          LEFT JOIN template_dependency accountIdtemplateDependency
          ON template_dependency.account_id = accountIdtemplateDependency.id
          LEFT JOIN template_dependency templateIdtemplateDependency
          ON template_dependency.template_id = templateIdtemplateDependency.id
          LEFT JOIN template_dependency resourceIdtemplateDependency
          ON template_dependency.resource_id = resourceIdtemplateDependency.id
          LEFT JOIN template_dependency versionIdtemplateDependency
          ON template_dependency.version_id = versionIdtemplateDependency.id
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
