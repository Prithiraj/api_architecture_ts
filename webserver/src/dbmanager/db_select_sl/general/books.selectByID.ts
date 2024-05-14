import pool from '../../dbconn';

export async function select_books_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT books.*, authorIdbooks, createdBybooks, updatedBybooks
          from books 
          LEFT JOIN books authorIdbooks
          ON books.author_id = authorIdbooks.['book_id']
          LEFT JOIN books createdBybooks
          ON books.created_by = createdBybooks.['book_id']
          LEFT JOIN books updatedBybooks
          ON books.updated_by = updatedBybooks.['book_id']
          where books.['bookId'] = $1 and books.created_by = $2
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
