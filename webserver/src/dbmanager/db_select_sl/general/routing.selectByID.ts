import pool from '../../dbconn';

export async function select_routing_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where routing.path = $1 and routing.created_by = $2
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
