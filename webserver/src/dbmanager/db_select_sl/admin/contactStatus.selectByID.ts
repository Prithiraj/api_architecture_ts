import pool from '../../dbconn';

export async function select_contactStatus_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_status.*, accountIdcontactStatus, statusLifecycleIdcontactStatus
          from contact_status 
          LEFT JOIN contact_status accountIdcontactStatus
          ON contact_status.account_id = accountIdcontactStatus.['id']
          LEFT JOIN contact_status statusLifecycleIdcontactStatus
          ON contact_status.status_lifecycle_id = statusLifecycleIdcontactStatus.['id']
          where contact_status.['id'] = $1
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
