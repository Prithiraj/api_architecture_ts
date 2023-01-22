import ajvInstance from '../ajv-instance';
import { activityLog_ajv } from '../mapper_ajv';


const activityLog_schema = {
  type: 'object',
  properties: {
    eventId: activityLog_ajv.eventId.api,
    eventCategoryId: activityLog_ajv.eventCategoryId.api,
    eventCategory: activityLog_ajv.eventCategory.api,
    eventTypeId: activityLog_ajv.eventTypeId.api,
    eventType: activityLog_ajv.eventType.api,
    historyData: activityLog_ajv.historyData.api,
    endTime: activityLog_ajv.endTime.api,
    eventClass: activityLog_ajv.eventClass.api,
    eventCode: activityLog_ajv.eventCode.api,
    eventData: activityLog_ajv.eventData.api,
    eventSeverity: activityLog_ajv.eventSeverity.api,
    eventTime: activityLog_ajv.eventTime.api,
    message: activityLog_ajv.message.api,
    ownerId: activityLog_ajv.ownerId.api,
    reason: activityLog_ajv.reason.api,
    startTime: activityLog_ajv.startTime.api,
    timeZone: activityLog_ajv.timeZone.api,
    channelId: activityLog_ajv.channelId.api,
    channelType: activityLog_ajv.channelType.api,
    resourceId: activityLog_ajv.resourceId.api,
    resourceType: activityLog_ajv.resourceType.api,
    sourceId: activityLog_ajv.sourceId.api,
    sourceType: activityLog_ajv.sourceType.api,
    contactId: activityLog_ajv.contactId.api,
    masterEventTime: activityLog_ajv.masterEventTime.api,
    userId: activityLog_ajv.userId.api,
  },
  required: ['eventTime', 'eventType', 'eventCategoryId', 'eventCategory', 'masterEventTime', 'eventTypeId'],
  additionalProperties: false,
};

export default ajvInstance.compile(activityLog_schema);
