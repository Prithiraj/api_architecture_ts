import pool from '../../dbconn';

export async function select_contact_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact.*, accountIdcontact, statusIdcontact, addressIdcontact, organizationIdcontact, statusLifecycleIdcontact, currentLoanIdcontact, desiredLoanIdcontact
          from contact 
          LEFT JOIN contact accountIdcontact
          ON contact.account_id = accountIdcontact.['id']
          LEFT JOIN contact statusIdcontact
          ON contact.status_id = statusIdcontact.['id']
          LEFT JOIN contact addressIdcontact
          ON contact.address_id = addressIdcontact.['id']
          LEFT JOIN contact organizationIdcontact
          ON contact.organization_id = organizationIdcontact.['id']
          LEFT JOIN contact statusLifecycleIdcontact
          ON contact.status_lifecycle_id = statusLifecycleIdcontact.['id']
          LEFT JOIN contact currentLoanIdcontact
          ON contact.current_loan_id = currentLoanIdcontact.['id']
          LEFT JOIN contact desiredLoanIdcontact
          ON contact.desired_loan_id = desiredLoanIdcontact.['id']
          where contact.['id'] = $1
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
