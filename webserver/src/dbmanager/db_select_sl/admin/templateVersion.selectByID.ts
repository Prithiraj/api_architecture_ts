import pool from '../../dbconn';

export async function select_templateVersion_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT template_version.*, accountIdtemplateVersion
          from template_version 
          LEFT JOIN template_version accountIdtemplateVersion
          ON template_version.account_id = accountIdtemplateVersion.id
          where template_version.id = $1
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
