import pool from '../../dbconn';

export async function select_activityLog_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT activity_log.*, eventCategoryIdeventCategory, eventTypeIdeventType, contactIdcontact, userIduser
          from activity_log 
          LEFT JOIN event_category eventCategoryIdeventCategory
          ON activity_log.event_category_id = eventCategoryIdeventCategory.id
          LEFT JOIN event_type eventTypeIdeventType
          ON activity_log.event_type_id = eventTypeIdeventType.id
          LEFT JOIN contact contactIdcontact
          ON activity_log.contact_id = contactIdcontact.id
          LEFT JOIN user userIduser
          ON activity_log.user_id = userIduser.id
          where activity_log.id = $1 and activity_log.created_by = $2
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
