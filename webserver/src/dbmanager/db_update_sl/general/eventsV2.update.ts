import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_eventsV2(request: any) {
	// processors
	
  const input = request.body;

  const table_cols: Record<string, string> = {
    eventId: 'event_id',
	    eventCategoryId: 'event_category_id',
	    eventCategory: 'event_category',
	    eventTypeId: 'event_type_id',
	    eventType: 'event_type',
	    eventData: 'event_data',
	    eventProvider: 'event_provider',
	    rawBucket: 'raw_bucket',
	    rawPath: 'raw_path',
	    reason: 'reason',
	    createTime: 'create_time',
	    destinationLocation: 'destination.location',
	    destinationType: 'destination.type',
	    deviceIp: 'device.ip',
	    deviceLocationCity: 'device.location.city',
	    deviceLocationContinent: 'device.location.continent',
	    deviceLocationCoordinatesLat: 'device.location.coordinates.lat',
	    deviceLocationCoordinatesLon: 'device.location.coordinates.lon',
	    deviceLocationCountry: 'device.location.country',
	    deviceLocationZip: 'device.location.zip',
	    deviceTimezone: 'device.timezone',
	    deviceType: 'device.type',
	    userPool: 'user.pool',
	    destinationId: 'destination.id',
	    endTime: 'end_time',
	    eventClass: 'event_class',
	    eventCode: 'event_code',
	    eventSeverity: 'event_severity',
	    eventTime: 'event_time',
	    message: 'message',
	    ownerId: 'owner_id',
	    referralId: 'referral.id',
	    referralType: 'referral.type',
	    startTime: 'start_time',
	    resourceId: 'resource_id',
	    resourceType: 'resource_type',
	    sourceId: 'source_id',
	    sourceType: 'source_type',
	    timeZone: 'time_zone',
	    channelId: 'channel_id',
	    channelType: 'channel_type',
	  };

  const timestamp = new Date();

  const additionals: any = {
    updateTime: timestamp.toISOString(),
    updateRequest: request.request_id,
    updatedBy: request.decoded.user_id,
  };

  const pk = table_cols.t

  Object.assign(input, additionals);

  const key_values: any[] = [];
  const values: any[] = [];
  const id = input.t;
  let index = 0;
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols && key !== 'id') {
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

  values.push(id);

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
  if ('createdBy' in table_cols) {
    createdBy = `and ${table_cols['createdBy']}=$${index + 2}`;
    values.push(request.decoded.user_id);
  }

  const update_query = {
    text: `UPDATE public.events_v2 SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
    values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
