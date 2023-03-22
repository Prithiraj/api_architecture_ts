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
          where page.['id'] = $1 and page.created_by = $2
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
