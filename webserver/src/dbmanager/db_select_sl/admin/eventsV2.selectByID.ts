import pool from '../../dbconn';

export async function select_eventsV2_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT events_v2.*, eventCategoryIdeventCategory, eventTypeIdeventType
          from events_v2 
          LEFT JOIN event_category eventCategoryIdeventCategory
          ON events_v2.event_category_id = eventCategoryIdeventCategory.id
          LEFT JOIN event_type eventTypeIdeventType
          ON events_v2.event_type_id = eventTypeIdeventType.id
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
