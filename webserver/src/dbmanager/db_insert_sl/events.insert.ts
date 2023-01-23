import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_events(request: any) {
  // procesor
  const input = request.body;

  const table_cols: any = {
    eventAction: 'event_action',
    eventCategory: 'event_category',
    eventClass: 'event_class',
    eventCode: 'event_code',
    eventData: 'event_data',
    eventGroup: 'event_group',
    eventId: 'event_id',
    eventName: 'event_name',
    eventProvider: 'event_provider',
    eventSeverity: 'event_severity',
    eventType: 'event_type',
    message: 'message',
    outcome: 'outcome',
    parentId: 'parent_id',
    rawBucket: 'raw_bucket',
    rawPath: 'raw_path',
    reason: 'reason',
    createTime: 'create_time',
    endTime: 'end_time',
    eventTime: 'event_time',
    startTime: 'start_time',
    destinationId: 'destination.id',
    channelId: 'channel.id',
    channelType: 'channel.type',
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
    referralId: 'referral.id',
    referralType: 'referral.type',
    resourceId: 'resource.id',
    resourceType: 'resource.type',
    sourceId: 'source.id',
    sourceType: 'source.type',
    userAgent: 'user.agent',
    userId: 'user.id',
    userPool: 'user.pool',
    userType: 'user.type',
    timezone: 'timezone',
  };

  const timestamp = new Date();

  const additionals: any = {
    id: `events_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: request.decoded.account_id,
    createdBy: request.decoded.user_id,
    createRequest: request.request_id,
  };

  Object.assign(input, additionals);

  const cols: any[] = []
  const values: any[] = []
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
      values.push(value);
      }
  }

  const cols_str = cols.join(', ');
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const all_cols_str = all_cols.join(', ');
  const insert_query = {
	  text: `INSERT INTO events (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
	  values: values
  } 

  try{
	  const result = await pool.query(insert_query);
	  return result.rows;
  } catch (err: any) {
    if (err.code === 23503) {
      throw 'account_id doesn\'t exist';}
	  else {
      throw err;
    }
  }
}

