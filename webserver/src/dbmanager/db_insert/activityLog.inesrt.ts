import dataKey from "../../utils/utils";
import pool from "../dbconn";

export async function insert_activityLog(input: any) {

  // procesor

  const table_cols: any = {
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
  }

  const timestamp = new Date();

  const additionals: any= {
    id: `activity_log_${dataKey(6)}`,
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

  const insert_query = "INSERT INTO activity_log (" + cols_str +") values (" + values_str + ") returning " + all_cols_str + "";
  const result = await pool.query(insert_query);

  return result['rows']
}

