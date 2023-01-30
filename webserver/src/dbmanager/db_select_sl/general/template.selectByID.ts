import pool from '../../dbconn';

export async function select_template_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT template.*, accountIdaccount, latestVersionIdtemplateVersion
          from template 
          LEFT JOIN account accountIdaccount
          ON template.account_id = accountIdaccount.id
          LEFT JOIN template_version latestVersionIdtemplateVersion
          ON template.latest_version_id = latestVersionIdtemplateVersion.id
          where template.id = $1 and template.created_by = $2
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
