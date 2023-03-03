import pool from '../../dbconn';

export async function select_template_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT template.*, accountIdtemplate, latestVersionIdtemplate
          from template 
          LEFT JOIN template accountIdtemplate
          ON template.account_id = accountIdtemplate.id
          LEFT JOIN template latestVersionIdtemplate
          ON template.latest_version_id = latestVersionIdtemplate.id
          where template.id = $1
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
