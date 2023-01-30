import pool from '../../dbconn';

export async function select_page_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT page.*, accountIdaccount, templateIdtemplate, latestTemplateIdtemplateVersion, latestVersionIdpageVersion
          from page 
          LEFT JOIN account accountIdaccount
          ON page.account_id = accountIdaccount.id
          LEFT JOIN template templateIdtemplate
          ON page.template_id = templateIdtemplate.id
          LEFT JOIN template_version latestTemplateIdtemplateVersion
          ON page.latest_template_id = latestTemplateIdtemplateVersion.id
          LEFT JOIN page_version latestVersionIdpageVersion
          ON page.latest_version_id = latestVersionIdpageVersion.id
          where page.id = $1
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
