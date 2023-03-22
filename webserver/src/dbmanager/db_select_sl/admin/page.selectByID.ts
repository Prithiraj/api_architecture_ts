import pool from '../../dbconn';

export async function select_page_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT page.*, accountIdpage, templateIdpage, latestTemplateIdpage, latestVersionIdpage
          from page 
          LEFT JOIN page accountIdpage
          ON page.account_id = accountIdpage.['id']
          LEFT JOIN page templateIdpage
          ON page.template_id = templateIdpage.['id']
          LEFT JOIN page latestTemplateIdpage
          ON page.latest_template_id = latestTemplateIdpage.['id']
          LEFT JOIN page latestVersionIdpage
          ON page.latest_version_id = latestVersionIdpage.['id']
          where page.['id'] = $1
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
