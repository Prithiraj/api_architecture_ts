import pool from '../../dbconn';

export async function select_authors_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT authors.*, createdByauthors, updatedByauthors
          from authors 
          LEFT JOIN authors createdByauthors
          ON authors.created_by = createdByauthors.['author_id']
          LEFT JOIN authors updatedByauthors
          ON authors.updated_by = updatedByauthors.['author_id']
          where authors.['authorId'] = $1 and authors.created_by = $2
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
