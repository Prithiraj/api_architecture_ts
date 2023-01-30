import pool from '../../dbconn';

export async function select_organization_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT organization.*, accountIdaccount, addressIdproperty, parentOrganizationIdorganization
          from organization 
          LEFT JOIN account accountIdaccount
          ON organization.account_id = accountIdaccount.id
          LEFT JOIN property addressIdproperty
          ON organization.address_id = addressIdproperty.id
          LEFT JOIN organization parentOrganizationIdorganization
          ON organization.parent_organization_id = parentOrganizationIdorganization.id
          where organization.id = $1 and organization.created_by = $2
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
