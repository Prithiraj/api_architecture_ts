import pool from '../../dbconn';

export async function select_links_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT links.*, accountIdlinks, sourceIdlinks, destinationIdlinks
          from links 
          LEFT JOIN links accountIdlinks
          ON links.account_id = accountIdlinks.['id']
          LEFT JOIN links sourceIdlinks
          ON links.source_id = sourceIdlinks.['id']
          LEFT JOIN links destinationIdlinks
          ON links.destination_id = destinationIdlinks.['id']
          where links.['id'] = $1
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
