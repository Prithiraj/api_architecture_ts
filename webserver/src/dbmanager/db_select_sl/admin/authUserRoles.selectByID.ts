import pool from '../../dbconn';

export async function select_authUserRoles_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT auth_user_roles.*, roleIdauthUserRoles, userIdauthUserRoles
          from auth_user_roles 
          LEFT JOIN auth_user_roles roleIdauthUserRoles
          ON auth_user_roles.role_id = roleIdauthUserRoles.['id']
          LEFT JOIN auth_user_roles userIdauthUserRoles
          ON auth_user_roles.user_id = userIdauthUserRoles.['id']
          where auth_user_roles.['id'] = $1
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
