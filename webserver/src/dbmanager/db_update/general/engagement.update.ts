import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_engagement(input: any) {
	// processors

  const table_cols: Record<string, string> = {
    parentId: 'parent_id',	
	    eventId: 'event_id',	
	    rawBucket: 'raw_bucket',	
	    rawPath: 'raw_path',	
	    eventClass: 'event_class',	
	    eventType: 'event_type',	
	    eventTime: 'event_time',	
	    createTime: 'create_time',	
	    eventProvider: 'event_provider',	
	    eventAction: 'event_action',	
	    eventName: 'event_name',	
	    eventGroup: 'event_group',	
	    eventCategory: 'event_category',	
	    eventCode: 'event_code',	
	    eventSeverity: 'event_severity',	
	    outcome: 'outcome',	
	    message: 'message',	
	    reason: 'reason',	
	    timezone: 'timezone',	
	    startTime: 'start_time',	
	    endTime: 'end_time',	
	    eventData: 'event_data',	
	    channelId: 'channel.id',	
	    channelType: 'channel.type',	
	    resourceId: 'resource.id',	
	    resourceType: 'resource.type',	
	    sourceId: 'source.id',	
	    sourceType: 'source.type',	
	    userAgent: 'user.agent',	
	    userId: 'user.id',	
	    userPool: 'user.pool',	
	    userType: 'user.type',	
	    testCol01: 'test_col_01',	
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
  if ('createdBy' in table_cols) {
    createdBy = `and ${table_cols['createdBy']}=$${index + 2}`;
    values.push('account_info_a');
  }

  const update_query = {
	  text: `UPDATE public.engagement SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
