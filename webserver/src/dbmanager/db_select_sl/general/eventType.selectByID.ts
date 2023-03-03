import pool from '../../dbconn';

export async function select_eventType_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT event_type.*, eventCategoryIdeventType
          from event_type 
          LEFT JOIN event_type eventCategoryIdeventType
          ON event_type.event_category_id = eventCategoryIdeventType.id
          where event_type.id = $1 and event_type.created_by = $2
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
