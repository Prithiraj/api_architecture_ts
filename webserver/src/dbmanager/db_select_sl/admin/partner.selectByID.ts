import pool from '../../dbconn';

export async function select_partner_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT partner.*, accountIdpartner, organizationIdpartner, addressIdpartner
          from partner 
          LEFT JOIN partner accountIdpartner
          ON partner.account_id = accountIdpartner.id
          LEFT JOIN partner organizationIdpartner
          ON partner.organization_id = organizationIdpartner.id
          LEFT JOIN partner addressIdpartner
          ON partner.address_id = addressIdpartner.id
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
