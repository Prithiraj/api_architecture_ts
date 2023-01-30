import pool from '../../dbconn';

export async function select_contact_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT contact.*, accountIdaccount, statusIdcontactStatus, addressIdproperty, organizationIdorganization, statusLifecycleIdcontactStatusLifecycle, currentLoanIdloan, desiredLoanIdloan
          from contact 
          LEFT JOIN account accountIdaccount
          ON contact.account_id = accountIdaccount.id
          LEFT JOIN contact_status statusIdcontactStatus
          ON contact.status_id = statusIdcontactStatus.id
          LEFT JOIN property addressIdproperty
          ON contact.address_id = addressIdproperty.id
          LEFT JOIN organization organizationIdorganization
          ON contact.organization_id = organizationIdorganization.id
          LEFT JOIN contact_status_lifecycle statusLifecycleIdcontactStatusLifecycle
          ON contact.status_lifecycle_id = statusLifecycleIdcontactStatusLifecycle.id
          LEFT JOIN loan currentLoanIdloan
          ON contact.current_loan_id = currentLoanIdloan.id
          LEFT JOIN loan desiredLoanIdloan
          ON contact.desired_loan_id = desiredLoanIdloan.id
          where contact.id = $1
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
