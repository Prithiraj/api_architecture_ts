import ajvInstance from '../ajv-instance';
import { activityLog_ajv } from '../mapper_ajv';


const activityLog_schema = {
  type: 'object',
  properties: {
    eventId: activityLog_ajv.eventId.api,
    eventCategoryId: activityLog_ajv.eventCategoryId.api,
    eventTypeId: activityLog_ajv.eventTypeId.api,
    historyData: activityLog_ajv.historyData.api,
    eventClass: activityLog_ajv.eventClass.api,
    eventData: activityLog_ajv.eventData.api,
    eventTime: activityLog_ajv.eventTime.api,
    message: activityLog_ajv.message.api,
    ownerId: activityLog_ajv.ownerId.api,
    startTime: activityLog_ajv.startTime.api,
    resourceType: activityLog_ajv.resourceType.api,
    contactId: activityLog_ajv.contactId.api,
    masterEventTime: activityLog_ajv.masterEventTime.api,
    userId: activityLog_ajv.userId.api,
    reason: activityLog_ajv.reason.api,
    timeZone: activityLog_ajv.timeZone.api,
    eventCode: activityLog_ajv.eventCode.api,
    channelType: activityLog_ajv.channelType.api,
    eventCategory: activityLog_ajv.eventCategory.api,
    sourceType: activityLog_ajv.sourceType.api,
    endTime: activityLog_ajv.endTime.api,
  },
  required: ['eventCategory', 'masterEventTime', 'eventCategoryId', 'eventTypeId', 'eventTime'],
  additionalProperties: false,
};

export default ajvInstance.compile(activityLog_schema);
