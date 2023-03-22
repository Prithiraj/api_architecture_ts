import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_engagement_admin(request: any) {
  // processors

  const input = request.body;

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
    updateRequest: 'request.request_id',
    updatedBy: 'request.decoded.user_id',
  };

  const pk: string[] = [table_cols.eventId, ]

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

  values = values.concat([input.eventId, ])

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

  let pk_str: string = '';
  for (let i = 0; i < pk.length; i++) {
    index = index + 1
    if (i == 0) {
      pk_str += `${pk[i]}=$${index}`;
    } else if (i >= 1) {
      pk_str += ` and ${pk[i]}=$${index}`;
    }
  } 

  let createdBy = '';

  const update_query = {
	  text: `UPDATE public.engagement SET ${key_value_placeholders} WHERE ${pk_str} ${createdBy} returning ${all_cols_str}`,
	  values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
