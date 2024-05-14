import pool from '../../dbconn';

export async function select_bookShelves_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT book_shelves.*, bookIdbookShelves, copyNumberbookShelves
          from book_shelves 
          LEFT JOIN book_shelves bookIdbookShelves
          ON book_shelves.book_id = bookIdbookShelves.['shelf_id']
          LEFT JOIN book_shelves copyNumberbookShelves
          ON book_shelves.copy_number = copyNumberbookShelves.['shelf_id']
          where book_shelves.['shelfId'] = $1
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
