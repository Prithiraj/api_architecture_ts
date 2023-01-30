import pool from '../../dbconn';

export async function select_routing_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT routing.*, accountIdaccount, subdomainaccount, resourceIdpage
          from routing 
          LEFT JOIN account accountIdaccount
          ON routing.account_id = accountIdaccount.id
          LEFT JOIN account subdomainaccount
          ON routing.subdomain = subdomainaccount.id
          LEFT JOIN page resourceIdpage
          ON routing.resource_id = resourceIdpage.id
          where routing.path = $1
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
