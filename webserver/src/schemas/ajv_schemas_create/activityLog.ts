import ajvInstance from '../ajv-instance';
import { activityLog_ajv } from '../mapper_ajv';


const activityLog_schema = {
  type: 'object',
  properties: {
    id: activityLog_ajv.id.api,
    eventId: activityLog_ajv.eventId.api,
    eventCategoryId: activityLog_ajv.eventCategoryId.api,
    eventCategory: activityLog_ajv.eventCategory.api,
    eventTypeId: activityLog_ajv.eventTypeId.api,
    eventType: activityLog_ajv.eventType.api,
    historyData: activityLog_ajv.historyData.api,
    createTime: activityLog_ajv.createTime.api,
    endTime: activityLog_ajv.endTime.api,
    eventCode: activityLog_ajv.eventCode.api,
    eventData: activityLog_ajv.eventData.api,
    eventSeverity: activityLog_ajv.eventSeverity.api,
    message: activityLog_ajv.message.api,
    reason: activityLog_ajv.reason.api,
    startTime: activityLog_ajv.startTime.api,
    channelId: activityLog_ajv.channelId.api,
    resourceType: activityLog_ajv.resourceType.api,
    sourceType: activityLog_ajv.sourceType.api,
    masterEventTime: activityLog_ajv.masterEventTime.api,
    userId: activityLog_ajv.userId.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(activityLog_schema);
