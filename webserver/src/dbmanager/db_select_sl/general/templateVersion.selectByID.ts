import pool from '../../dbconn';

export async function select_templateVersion_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT template_version.*, accountIdtemplateVersion
          from template_version 
          LEFT JOIN template_version accountIdtemplateVersion
          ON template_version.account_id = accountIdtemplateVersion.['id']
          where template_version.['id'] = $1 and template_version.created_by = $2
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
