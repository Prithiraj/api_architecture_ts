import pool from '../../dbconn';

export async function select_elementVersion_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT element_version.*, accountIdaccount
          from element_version 
          LEFT JOIN account accountIdaccount
          ON element_version.account_id = accountIdaccount.id
          where element_version.id = $1
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
