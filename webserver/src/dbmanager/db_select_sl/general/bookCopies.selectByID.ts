import pool from '../../dbconn';

export async function select_bookCopies_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT book_copies.*, bookIdbookCopies
          from book_copies 
          LEFT JOIN book_copies bookIdbookCopies
          ON book_copies.book_id = bookIdbookCopies.['book_id', 'copy_number']
          where book_copies.['bookId', 'copyNumber'] = $1 and book_copies.created_by = $2
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
