import pool from '../../dbconn';

export async function select_incomeSource_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT income_source.*, accountIdincomeSource, contactIdincomeSource, addressIdincomeSource, organizationIdincomeSource
          from income_source 
          LEFT JOIN income_source accountIdincomeSource
          ON income_source.account_id = accountIdincomeSource.id
          LEFT JOIN income_source contactIdincomeSource
          ON income_source.contact_id = contactIdincomeSource.id
          LEFT JOIN income_source addressIdincomeSource
          ON income_source.address_id = addressIdincomeSource.id
          LEFT JOIN income_source organizationIdincomeSource
          ON income_source.organization_id = organizationIdincomeSource.id
          where income_source.id = $1
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
