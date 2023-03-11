import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_activityLog_admin(input: any) {
	// processors

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
    updateRequest: `request_${dataKey(6)}`,
    updatedBy: 'request.request_id',
  };

  const pk = table_cols.t

  Object.assign(input, additionals);

  const key_values: any[] = [];
  const values: any[] = []
  const id = input.id
  let index = 0;
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols && key !== 'id') {
      ++index;
      key_values.push(`${table_cols[key]} = $${index}`);
      values.push(value);
    }
  }

  values.push(id);

  const key_value_placeholders = key_values.join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
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
