import pool from '../../dbconn';

export async function select_eventsV2_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT events_v2.*, eventCategoryIdeventsV2, eventTypeIdeventsV2
          from events_v2 
          LEFT JOIN events_v2 eventCategoryIdeventsV2
          ON events_v2.event_category_id = eventCategoryIdeventsV2.['event_id']
          LEFT JOIN events_v2 eventTypeIdeventsV2
          ON events_v2.event_type_id = eventTypeIdeventsV2.['event_id']
          where events_v2.['eventId'] = $1 and events_v2.created_by = $2
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
