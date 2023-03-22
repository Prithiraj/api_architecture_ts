import pool from '../../dbconn';

export async function select_bridgeContactTag_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_tag.*, contactIdbridgeContactTag, tagIdbridgeContactTag, accountIdbridgeContactTag
          from bridge_contact_tag 
          LEFT JOIN bridge_contact_tag contactIdbridgeContactTag
          ON bridge_contact_tag.contact_id = contactIdbridgeContactTag.['contact_id', 'tag_id']
          LEFT JOIN bridge_contact_tag tagIdbridgeContactTag
          ON bridge_contact_tag.tag_id = tagIdbridgeContactTag.['contact_id', 'tag_id']
          LEFT JOIN bridge_contact_tag accountIdbridgeContactTag
          ON bridge_contact_tag.account_id = accountIdbridgeContactTag.['contact_id', 'tag_id']
          where bridge_contact_tag.['contactId', 'tagId'] = $1 and bridge_contact_tag.created_by = $2
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
