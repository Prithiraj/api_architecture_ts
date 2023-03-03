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
          SELECT bridge_contact_loan.*, contactIdbridgeContactLoan, loanIdbridgeContactLoan, accountIdbridgeContactLoan
          from bridge_contact_loan 
          LEFT JOIN bridge_contact_loan contactIdbridgeContactLoan
          ON bridge_contact_loan.contact_id = contactIdbridgeContactLoan.contact_id
          LEFT JOIN bridge_contact_loan loanIdbridgeContactLoan
          ON bridge_contact_loan.loan_id = loanIdbridgeContactLoan.contact_id
          LEFT JOIN bridge_contact_loan accountIdbridgeContactLoan
          ON bridge_contact_loan.account_id = accountIdbridgeContactLoan.contact_id
          where bridge_contact_loan.contactId = $1 and bridge_contact_loan.created_by = $2
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
