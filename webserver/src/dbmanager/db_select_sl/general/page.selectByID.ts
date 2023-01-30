import pool from '../../dbconn';

export async function select_page_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

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
          where page.id = $1 and page.created_by = $2
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
