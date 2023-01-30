import pool from '../../dbconn';

export async function select_organization_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
