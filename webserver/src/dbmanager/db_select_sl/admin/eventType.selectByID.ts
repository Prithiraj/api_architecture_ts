import pool from '../../dbconn';

export async function select_eventType_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT event_type.*, eventCategoryIdeventCategory
          from event_type 
          LEFT JOIN event_category eventCategoryIdeventCategory
          ON event_type.event_category_id = eventCategoryIdeventCategory.id
          where event_type.id = $1
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
