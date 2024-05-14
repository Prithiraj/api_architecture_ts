import pool from '../../dbconn';

export async function select_books_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
          where books.['bookId'] = $1
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
