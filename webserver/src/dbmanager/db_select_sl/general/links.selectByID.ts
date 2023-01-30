import pool from '../../dbconn';

export async function select_links_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT links.*, accountIdaccount, sourceIdpage, destinationIdpage
          from links 
          LEFT JOIN account accountIdaccount
          ON links.account_id = accountIdaccount.id
          LEFT JOIN page sourceIdpage
          ON links.source_id = sourceIdpage.id
          LEFT JOIN page destinationIdpage
          ON links.destination_id = destinationIdpage.id
          where links.id = $1 and links.created_by = $2
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
