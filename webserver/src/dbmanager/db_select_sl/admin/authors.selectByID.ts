import pool from '../../dbconn';

export async function select_authors_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT authors.*, createdByauthors, updatedByauthors
          from authors 
          LEFT JOIN authors createdByauthors
          ON authors.created_by = createdByauthors.['author_id']
          LEFT JOIN authors updatedByauthors
          ON authors.updated_by = updatedByauthors.['author_id']
          where authors.['authorId'] = $1
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
