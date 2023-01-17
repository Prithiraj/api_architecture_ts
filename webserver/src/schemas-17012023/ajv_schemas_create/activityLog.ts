import ajvInstance from '../ajv-instance';
import { activityLog_ajv } from '../mapper_ajv';


const activityLog_schema = {
  type: 'object',
  properties: {
    id: activityLog_ajv.id.api,
    eventId: activityLog_ajv.eventId.api,
    eventCategoryId: activityLog_ajv.eventCategoryId.api,
    eventTypeId: activityLog_ajv.eventTypeId.api,
    historyData: activityLog_ajv.historyData.api,
    createTime: activityLog_ajv.createTime.api,
    eventClass: activityLog_ajv.eventClass.api,
    eventData: activityLog_ajv.eventData.api,
    eventTime: activityLog_ajv.eventTime.api,
    message: activityLog_ajv.message.api,
    ownerId: activityLog_ajv.ownerId.api,
    startTime: activityLog_ajv.startTime.api,
    channelId: activityLog_ajv.channelId.api,
    resourceType: activityLog_ajv.resourceType.api,
    contactId: activityLog_ajv.contactId.api,
    masterEventTime: activityLog_ajv.masterEventTime.api,
    userId: activityLog_ajv.userId.api,
  },
  required: ['eventCategoryId', 'eventTypeId', 'eventTime', 'masterEventTime'],
  additionalProperties: false,
};

export default ajvInstance.compile(activityLog_schema);
