import pool from '../../dbconn';

export async function select_templateDependency_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
