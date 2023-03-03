import pool from '../../dbconn';

export async function select_organization_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT organization.*, accountIdorganization, addressIdorganization, parentOrganizationIdorganization
          from organization 
          LEFT JOIN organization accountIdorganization
          ON organization.account_id = accountIdorganization.id
          LEFT JOIN organization addressIdorganization
          ON organization.address_id = addressIdorganization.id
          LEFT JOIN organization parentOrganizationIdorganization
          ON organization.parent_organization_id = parentOrganizationIdorganization.id
          where organization.id = $1
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
