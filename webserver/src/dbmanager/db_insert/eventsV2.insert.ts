import dataKey from '../../utils/utils';
import pool from '../dbconn';
import { eventsV2_ajv } from '../../schemas/mapper_ajv'

export async function insert_eventsV2(input: any) {
  // procesor

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

  let pk_value: string|number = `events_v2_${dataKey(6)}`;
  const type_of_pk = eventsV2_ajv.eventId.api.type;
  if (type_of_pk === 'integer' || type_of_pk === 'number') {
    pk_value = Math.floor(Math.random() * 100000);
  }

  const additionals: any = {
    eventId: `${pk_value}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: "account_1607435487272_5nl561qt",
    createdBy: "request.decoded.user_id",
    createRequest: `request_${dataKey(6)}`,
  };

  Object.assign(input, additionals);

  const cols: any[] = [];
  const values: any[] = [];
  for (const [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      const table_db_key = table_cols[key];
      if (table_db_key.indexOf('.') > -1) {
        cols.push(`"${table_db_key}"`);
      }
      else {
        cols.push(table_db_key);
      }
      values.push(value);
    }
  }

  const cols_str = cols.join(', ');
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
  const all_cols: any[] = [];
  for (const [key, value] of Object.entries(table_cols)) {
    if (value.indexOf('.') > -1) {
      all_cols.push(`"${value}"`);
    }
    else {
      all_cols.push(value);
    }
  }

  const all_cols_str = all_cols.join(', ');
  const insert_query = {
	  text: `INSERT INTO events_v2 (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
	  values: values
  };


  try{
    const result = await pool.query(insert_query);
    return result.rows;
  } catch (err: any) {
    if (err.code === 23503) {
      throw 'account_id doesn\'t exist';
    }
	  else {
      throw err;
    }
  }
}

