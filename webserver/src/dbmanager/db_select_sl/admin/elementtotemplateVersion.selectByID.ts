import pool from '../../dbconn';

export async function select_elementtotemplateVersion_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT _elementTotemplate_version.*, aElementTotemplateVersion, bElementTotemplateVersion
          from _elementTotemplate_version 
          LEFT JOIN _elementTotemplate_version aElementTotemplateVersion
          ON _elementTotemplate_version.A = aElementTotemplateVersion.id
          LEFT JOIN _elementTotemplate_version bElementTotemplateVersion
          ON _elementTotemplate_version.B = bElementTotemplateVersion.id
          where _elementTotemplate_version.id = $1
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
