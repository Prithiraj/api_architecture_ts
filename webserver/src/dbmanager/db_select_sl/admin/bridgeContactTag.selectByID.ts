import pool from '../../dbconn';

export async function select_bridgeContactTag_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT bridge_contact_tag.*, contactIdbridgeContactTag, tagIdbridgeContactTag, accountIdbridgeContactTag
          from bridge_contact_tag 
          LEFT JOIN bridge_contact_tag contactIdbridgeContactTag
          ON bridge_contact_tag.contact_id = contactIdbridgeContactTag.contact_id
          LEFT JOIN bridge_contact_tag tagIdbridgeContactTag
          ON bridge_contact_tag.tag_id = tagIdbridgeContactTag.contact_id
          LEFT JOIN bridge_contact_tag accountIdbridgeContactTag
          ON bridge_contact_tag.account_id = accountIdbridgeContactTag.contact_id
          where bridge_contact_tag.contactId = $1
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
