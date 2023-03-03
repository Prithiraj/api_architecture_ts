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
          SELECT routing.*, accountIdrouting, subdomainrouting, resourceIdrouting
          from routing 
          LEFT JOIN routing accountIdrouting
          ON routing.account_id = accountIdrouting.path
          LEFT JOIN routing subdomainrouting
          ON routing.subdomain = subdomainrouting.path
          LEFT JOIN routing resourceIdrouting
          ON routing.resource_id = resourceIdrouting.path
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
