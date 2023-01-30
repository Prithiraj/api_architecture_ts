import pool from '../../dbconn';

export async function select_template_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT template.*, accountIdaccount, latestVersionIdtemplateVersion
          from template 
          LEFT JOIN account accountIdaccount
          ON template.account_id = accountIdaccount.id
          LEFT JOIN template_version latestVersionIdtemplateVersion
          ON template.latest_version_id = latestVersionIdtemplateVersion.id
          where template.id = $1
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
