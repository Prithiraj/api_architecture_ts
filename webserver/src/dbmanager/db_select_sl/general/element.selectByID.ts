import pool from '../../dbconn';

export async function select_element_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT element.*, accountIdaccount, templateIdtemplate, latestVersionIdelementVersion
          from element 
          LEFT JOIN account accountIdaccount
          ON element.account_id = accountIdaccount.id
          LEFT JOIN template templateIdtemplate
          ON element.template_id = templateIdtemplate.id
          LEFT JOIN element_version latestVersionIdelementVersion
          ON element.latest_version_id = latestVersionIdelementVersion.id
          where element.id = $1 and element.created_by = $2
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
