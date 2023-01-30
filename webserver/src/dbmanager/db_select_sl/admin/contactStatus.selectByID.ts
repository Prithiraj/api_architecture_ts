import pool from '../../dbconn';

export async function select_contactStatus_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_status.*, accountIdaccount, statusLifecycleIdcontactStatusLifecycle
          from contact_status 
          LEFT JOIN account accountIdaccount
          ON contact_status.account_id = accountIdaccount.id
          LEFT JOIN contact_status_lifecycle statusLifecycleIdcontactStatusLifecycle
          ON contact_status.status_lifecycle_id = statusLifecycleIdcontactStatusLifecycle.id
          where contact_status.id = $1
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
