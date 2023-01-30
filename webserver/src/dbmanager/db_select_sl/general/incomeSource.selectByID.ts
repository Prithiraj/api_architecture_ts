import pool from '../../dbconn';

export async function select_incomeSource_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT income_source.*, accountIdaccount, contactIdcontact, addressIdproperty, organizationIdorganization
          from income_source 
          LEFT JOIN account accountIdaccount
          ON income_source.account_id = accountIdaccount.id
          LEFT JOIN contact contactIdcontact
          ON income_source.contact_id = contactIdcontact.id
          LEFT JOIN property addressIdproperty
          ON income_source.address_id = addressIdproperty.id
          LEFT JOIN organization organizationIdorganization
          ON income_source.organization_id = organizationIdorganization.id
          where income_source.id = $1 and income_source.created_by = $2
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
