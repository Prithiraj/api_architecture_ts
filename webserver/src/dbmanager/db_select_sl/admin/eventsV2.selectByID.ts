import pool from '../../dbconn';

export async function select_eventsV2_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT events_v2.*, eventCategoryIdeventsV2, eventTypeIdeventsV2
          from events_v2 
          LEFT JOIN events_v2 eventCategoryIdeventsV2
          ON events_v2.event_category_id = eventCategoryIdeventsV2.event_id
          LEFT JOIN events_v2 eventTypeIdeventsV2
          ON events_v2.event_type_id = eventTypeIdeventsV2.event_id
          where events_v2.eventId = $1
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
