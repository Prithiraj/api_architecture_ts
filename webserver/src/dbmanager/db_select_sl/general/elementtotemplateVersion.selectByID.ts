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
          SELECT _elementTotemplate_version.*, aElementTotemplateVersion, bElementTotemplateVersion
          from _elementTotemplate_version 
          LEFT JOIN _elementTotemplate_version aElementTotemplateVersion
          ON _elementTotemplate_version.A = aElementTotemplateVersion.
          LEFT JOIN _elementTotemplate_version bElementTotemplateVersion
          ON _elementTotemplate_version.B = bElementTotemplateVersion.
          where _elementTotemplate_version. = $1 and _elementTotemplate_version.created_by = $2
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
