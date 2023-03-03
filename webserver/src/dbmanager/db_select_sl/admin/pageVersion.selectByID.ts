import pool from '../../dbconn';

export async function select_pageVersion_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT page_version.*, accountIdpageVersion
          from page_version 
          LEFT JOIN page_version accountIdpageVersion
          ON page_version.account_id = accountIdpageVersion.id
          where page_version.id = $1
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
