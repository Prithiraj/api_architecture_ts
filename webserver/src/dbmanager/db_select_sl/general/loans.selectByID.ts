import pool from '../../dbconn';

export async function select_loans_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT loans.*, bookIdloans, memberIdloans, issuedByloans
          from loans 
          LEFT JOIN loans bookIdloans
          ON loans.book_id = bookIdloans.['loan_id']
          LEFT JOIN loans memberIdloans
          ON loans.member_id = memberIdloans.['loan_id']
          LEFT JOIN loans issuedByloans
          ON loans.issued_by = issuedByloans.['loan_id']
          where loans.['loanId'] = $1 and loans.created_by = $2
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
