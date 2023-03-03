import pool from '../../dbconn';

export async function select_elementVersion_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT element_version.*, accountIdelementVersion
          from element_version 
          LEFT JOIN element_version accountIdelementVersion
          ON element_version.account_id = accountIdelementVersion.id
          where element_version.id = $1 and element_version.created_by = $2
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
