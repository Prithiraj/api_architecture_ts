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
          SELECT income_source.*, accountIdincomeSource, contactIdincomeSource, addressIdincomeSource, organizationIdincomeSource
          from income_source 
          LEFT JOIN income_source accountIdincomeSource
          ON income_source.account_id = accountIdincomeSource.['id']
          LEFT JOIN income_source contactIdincomeSource
          ON income_source.contact_id = contactIdincomeSource.['id']
          LEFT JOIN income_source addressIdincomeSource
          ON income_source.address_id = addressIdincomeSource.['id']
          LEFT JOIN income_source organizationIdincomeSource
          ON income_source.organization_id = organizationIdincomeSource.['id']
          where income_source.['id'] = $1 and income_source.created_by = $2
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
