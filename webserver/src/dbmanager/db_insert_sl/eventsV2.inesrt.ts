import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_eventsV2(request: any) {
  // procesor
  const input = request.body;

  const table_cols: any = {
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
    id: `events_v2_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: request.decoded.account_id,
    createdBy: request.decoded.user_id,
    createRequest: request.request_id,
  };

  Object.assign(input, additionals);

  const cols: any[] = [];
  const values: any[] = [];
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
        if (typeof(value) === 'string'){
          value = "'"+value+"'";
        }
        values.push(value);
      }
  }

  const all_cols: any[] = [];
  for (const [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const cols_str = cols.join(', ');
  const values_str = values.join(', ');
  const all_cols_str = all_cols.join(', ');

  const insert_query = `INSERT INTO events_v2 (${cols_str}) values (${values_str}) returning ${all_cols_str}`;
  const result = await pool.query(insert_query);

  return result.rows;
}

