import pool from '../../dbconn';

export async function select_loans_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
          where loans.['loanId'] = $1
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
