import pool from '../../dbconn';

export async function select_loan_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT loan.*, accountIdaccount, loanOfficerIduser, addressIdproperty
          from loan 
          LEFT JOIN account accountIdaccount
          ON loan.account_id = accountIdaccount.id
          LEFT JOIN user loanOfficerIduser
          ON loan.loan_officer_id = loanOfficerIduser.id
          LEFT JOIN property addressIdproperty
          ON loan.address_id = addressIdproperty.id
          where loan.id = $1
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
