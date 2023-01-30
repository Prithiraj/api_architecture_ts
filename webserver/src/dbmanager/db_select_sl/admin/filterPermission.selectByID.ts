import pool from '../../dbconn';

export async function select_filterPermission_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT filter_permission.*, contactFilterIdcontactFilter
          from filter_permission 
          LEFT JOIN contact_filter contactFilterIdcontactFilter
          ON filter_permission.contact_filter_id = contactFilterIdcontactFilter.id
          where filter_permission.id = $1
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
