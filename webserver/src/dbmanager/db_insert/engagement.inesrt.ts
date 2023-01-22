import dataKey from "../../utils/utils";
import pool from "../dbconn";

export async function insert_engagement(input: any) {

  // procesor

  const table_cols: any = {
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
  }

  const timestamp = new Date();

  const additionals: any= {
    id: `engagement_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: "account_1607435487272_5nl561qt",
    createdBy: "request.decoded.user_id",
    createRequest: `request_${dataKey(6)}`,
  }

  Object.assign(input, additionals)
	
  let cols: any[] = []
  let values: any[] = []
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
        if (typeof(value) === "string"){
          value = "'"+value+"'";
        }
        values.push(value)
      }
  }


  let all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const cols_str = cols.join(", ");
  const values_str = values.join(", ")
  const all_cols_str = all_cols.join(", ")

  const insert_query = "INSERT INTO engagement (" + cols_str +") values (" + values_str + ") returning " + all_cols_str + "";
  const result = await pool.query(insert_query);

  return result['rows']
}

