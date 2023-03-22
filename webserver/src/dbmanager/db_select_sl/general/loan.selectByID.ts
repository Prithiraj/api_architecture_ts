import pool from '../../dbconn';

export async function select_loan_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT loan.*, accountIdloan, loanOfficerIdloan, addressIdloan
          from loan 
          LEFT JOIN loan accountIdloan
          ON loan.account_id = accountIdloan.['id']
          LEFT JOIN loan loanOfficerIdloan
          ON loan.loan_officer_id = loanOfficerIdloan.['id']
          LEFT JOIN loan addressIdloan
          ON loan.address_id = addressIdloan.['id']
          where loan.['id'] = $1 and loan.created_by = $2
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
