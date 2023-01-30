import pool from '../../dbconn';

export async function select_activityLog_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
          where activity_log.id = $1
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
