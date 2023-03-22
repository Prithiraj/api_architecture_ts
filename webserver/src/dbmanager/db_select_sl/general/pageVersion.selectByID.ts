import pool from '../../dbconn';

export async function select_pageVersion_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT page_version.*, accountIdpageVersion
          from page_version 
          LEFT JOIN page_version accountIdpageVersion
          ON page_version.account_id = accountIdpageVersion.['id']
          where page_version.['id'] = $1 and page_version.created_by = $2
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
