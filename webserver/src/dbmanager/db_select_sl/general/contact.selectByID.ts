import pool from '../../dbconn';

export async function select_contact_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact.*, accountIdcontact, statusIdcontact, addressIdcontact, organizationIdcontact, statusLifecycleIdcontact, currentLoanIdcontact, desiredLoanIdcontact
          from contact 
          LEFT JOIN contact accountIdcontact
          ON contact.account_id = accountIdcontact.id
          LEFT JOIN contact statusIdcontact
          ON contact.status_id = statusIdcontact.id
          LEFT JOIN contact addressIdcontact
          ON contact.address_id = addressIdcontact.id
          LEFT JOIN contact organizationIdcontact
          ON contact.organization_id = organizationIdcontact.id
          LEFT JOIN contact statusLifecycleIdcontact
          ON contact.status_lifecycle_id = statusLifecycleIdcontact.id
          LEFT JOIN contact currentLoanIdcontact
          ON contact.current_loan_id = currentLoanIdcontact.id
          LEFT JOIN contact desiredLoanIdcontact
          ON contact.desired_loan_id = desiredLoanIdcontact.id
          where contact.id = $1 and contact.created_by = $2
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
