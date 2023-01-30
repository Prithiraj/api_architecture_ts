import pool from '../../dbconn';

export async function select_bridgeContactLoan_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where bridge_contact_loan.id = $1 and bridge_contact_loan.created_by = $2
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
