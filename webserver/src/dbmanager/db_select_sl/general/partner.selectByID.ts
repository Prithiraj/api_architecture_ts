import pool from '../../dbconn';

export async function select_partner_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where partner.id = $1 and partner.created_by = $2
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
