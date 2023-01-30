import pool from '../../dbconn';

export async function select_links_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
          where links.id = $1
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
