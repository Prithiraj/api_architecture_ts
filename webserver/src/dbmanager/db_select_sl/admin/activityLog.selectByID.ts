import pool from '../../dbconn';

export async function select_activityLog_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT activity_log.*, eventCategoryIdactivityLog, eventTypeIdactivityLog, contactIdactivityLog, userIdactivityLog
          from activity_log 
          LEFT JOIN activity_log eventCategoryIdactivityLog
          ON activity_log.event_category_id = eventCategoryIdactivityLog.id
          LEFT JOIN activity_log eventTypeIdactivityLog
          ON activity_log.event_type_id = eventTypeIdactivityLog.id
          LEFT JOIN activity_log contactIdactivityLog
          ON activity_log.contact_id = contactIdactivityLog.id
          LEFT JOIN activity_log userIdactivityLog
          ON activity_log.user_id = userIdactivityLog.id
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
