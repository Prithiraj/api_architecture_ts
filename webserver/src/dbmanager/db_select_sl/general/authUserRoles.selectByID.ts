import pool from '../../dbconn';

export async function select_authUserRoles_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT auth_user_roles.*, roleIdauthUserRoles, userIdauthUserRoles
          from auth_user_roles 
          LEFT JOIN auth_user_roles roleIdauthUserRoles
          ON auth_user_roles.role_id = roleIdauthUserRoles.['id']
          LEFT JOIN auth_user_roles userIdauthUserRoles
          ON auth_user_roles.user_id = userIdauthUserRoles.['id']
          where auth_user_roles.['id'] = $1 and auth_user_roles.created_by = $2
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
