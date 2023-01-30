import pool from '../../dbconn';

export async function select_contactStatus_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_status.*, accountIdaccount, statusLifecycleIdcontactStatusLifecycle
          from contact_status 
          LEFT JOIN account accountIdaccount
          ON contact_status.account_id = accountIdaccount.id
          LEFT JOIN contact_status_lifecycle statusLifecycleIdcontactStatusLifecycle
          ON contact_status.status_lifecycle_id = statusLifecycleIdcontactStatusLifecycle.id
          where contact_status.id = $1 and contact_status.created_by = $2
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
