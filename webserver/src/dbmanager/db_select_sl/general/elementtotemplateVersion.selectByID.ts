import pool from '../../dbconn';

export async function select_elementtotemplateVersion_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT _elementTotemplate_version.*, Aelement, btemplateVersion
          from _elementTotemplate_version 
          LEFT JOIN element Aelement
          ON _elementTotemplate_version.A = Aelement.id
          LEFT JOIN template_version btemplateVersion
          ON _elementTotemplate_version.B = btemplateVersion.id
          where _elementTotemplate_version.id = $1 and _elementTotemplate_version.created_by = $2
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
