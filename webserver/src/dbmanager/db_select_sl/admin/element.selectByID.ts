import pool from '../../dbconn';

export async function select_element_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT element.*, accountIdelement, templateIdelement, latestVersionIdelement
          from element 
          LEFT JOIN element accountIdelement
          ON element.account_id = accountIdelement.id
          LEFT JOIN element templateIdelement
          ON element.template_id = templateIdelement.id
          LEFT JOIN element latestVersionIdelement
          ON element.latest_version_id = latestVersionIdelement.id
          where element.id = $1
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
