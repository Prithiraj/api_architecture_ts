import pool from '../../dbconn';

export async function select_contactReminder_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact_reminder.*, accountIdaccount, contactIdcontact, userIduser
          from contact_reminder 
          LEFT JOIN account accountIdaccount
          ON contact_reminder.account_id = accountIdaccount.id
          LEFT JOIN contact contactIdcontact
          ON contact_reminder.contact_id = contactIdcontact.id
          LEFT JOIN user userIduser
          ON contact_reminder.user_id = userIduser.id
          where contact_reminder.id = $1
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
