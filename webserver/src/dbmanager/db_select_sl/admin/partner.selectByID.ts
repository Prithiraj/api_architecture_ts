import pool from '../../dbconn';

export async function select_partner_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT partner.*, accountIdaccount, organizationIdorganization, addressIdproperty
          from partner 
          LEFT JOIN account accountIdaccount
          ON partner.account_id = accountIdaccount.id
          LEFT JOIN organization organizationIdorganization
          ON partner.organization_id = organizationIdorganization.id
          LEFT JOIN property addressIdproperty
          ON partner.address_id = addressIdproperty.id
          where partner.id = $1
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
