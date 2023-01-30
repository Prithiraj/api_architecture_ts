import pool from '../../dbconn';

export async function select_bridgeContactLoan_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_loan.*, contactIdcontact, loanIdloan, accountIdaccount
          from bridge_contact_loan 
          LEFT JOIN contact contactIdcontact
          ON bridge_contact_loan.contact_id = contactIdcontact.id
          LEFT JOIN loan loanIdloan
          ON bridge_contact_loan.loan_id = loanIdloan.id
          LEFT JOIN account accountIdaccount
          ON bridge_contact_loan.account_id = accountIdaccount.id
          where bridge_contact_loan.id = $1
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
