import pool from '../../dbconn';

export async function select_bridgeContactPrimaryIncome_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_primary_income.*, contactIdcontact, incomeSourceIdincomeSource
          from bridge_contact_primary_income 
          LEFT JOIN contact contactIdcontact
          ON bridge_contact_primary_income.contact_id = contactIdcontact.id
          LEFT JOIN income_source incomeSourceIdincomeSource
          ON bridge_contact_primary_income.income_source_id = incomeSourceIdincomeSource.id
          where bridge_contact_primary_income.id = $1 and bridge_contact_primary_income.created_by = $2
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
