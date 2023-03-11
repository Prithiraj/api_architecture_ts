import pool from '../../dbconn';

export async function select_authUsers_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT auth_users.*
          from auth_users 
          where auth_users.id = $1
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
