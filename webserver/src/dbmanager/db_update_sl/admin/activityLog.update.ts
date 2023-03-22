import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_activityLog_admin(request: any) {
  // processors

  const input = request.body;

  const table_cols: Record<string, string> = {
    id: 'id',
    eventId: 'event_id',
    eventCategoryId: 'event_category_id',
    eventCategory: 'event_category',
    eventTypeId: 'event_type_id',
    eventType: 'event_type',
    historyData: 'history_data',
    createTime: 'create_time',
    endTime: 'end_time',
    eventClass: 'event_class',
    eventCode: 'event_code',
    eventData: 'event_data',
    eventSeverity: 'event_severity',
    eventTime: 'event_time',
    message: 'message',
    ownerId: 'owner_id',
    reason: 'reason',
    startTime: 'start_time',
    timeZone: 'time_zone',
    channelId: 'channel_id',
    channelType: 'channel_type',
    resourceId: 'resource_id',
    resourceType: 'resource_type',
    sourceId: 'source_id',
    sourceType: 'source_type',
    contactId: 'contact_id',
    masterEventTime: 'master_event_time',
    userId: 'user_id',
  };

  const timestamp = new Date();

  const additionals: any = {
    updateTime: timestamp.toISOString(),
    updateRequest: request.request_id,
    updatedBy: request.decoded.user_id,
  };

  const pk: string[] = [table_cols.id, ]

  Object.assign(input, additionals);

  const key_values: any[] = [];
  let values: any[] = [];
  let index = 0;
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols && !pk.includes(key)) {
      ++index;
      const table_db_key = table_cols[key];
      if (table_db_key.indexOf('.') > -1) {
        key_values.push(`"${table_db_key}" = $${index}`);
      }
      else {
        key_values.push(`${table_db_key} = $${index}`);
      }
      values.push(value);
    }
  }

  values = values.concat([input.id, ])

  const key_value_placeholders = key_values.join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    if (value.indexOf('.') > -1) {
      all_cols.push(`"${value}"`);
    }
    else {
      all_cols.push(value);
    }
  }
  
  const all_cols_str = all_cols.join(', ');
  
  let createdBy = '';

  const update_query = {
	  text: `UPDATE public.activity_log SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
