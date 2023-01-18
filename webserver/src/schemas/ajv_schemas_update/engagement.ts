import ajvInstance from '../ajv-instance';
import { engagement_ajv } from '../mapper_ajv';


const engagement_schema = {
  type: 'object',
  properties: {
    parentId: engagement_ajv.parentId.api,
    eventId: engagement_ajv.eventId.api,
    rawBucket: engagement_ajv.rawBucket.api,
    rawPath: engagement_ajv.rawPath.api,
    eventClass: engagement_ajv.eventClass.api,
    eventType: engagement_ajv.eventType.api,
    eventTime: engagement_ajv.eventTime.api,
    eventProvider: engagement_ajv.eventProvider.api,
    eventAction: engagement_ajv.eventAction.api,
    eventName: engagement_ajv.eventName.api,
    eventGroup: engagement_ajv.eventGroup.api,
    eventCategory: engagement_ajv.eventCategory.api,
    eventCode: engagement_ajv.eventCode.api,
    eventSeverity: engagement_ajv.eventSeverity.api,
    message: engagement_ajv.message.api,
    reason: engagement_ajv.reason.api,
    timezone: engagement_ajv.timezone.api,
    startTime: engagement_ajv.startTime.api,
    endTime: engagement_ajv.endTime.api,
    eventData: engagement_ajv.eventData.api,
    channelId: engagement_ajv.channelId.api,
    channelType: engagement_ajv.channelType.api,
    resourceId: engagement_ajv.resourceId.api,
    resourceType: engagement_ajv.resourceType.api,
    sourceId: engagement_ajv.sourceId.api,
    sourceType: engagement_ajv.sourceType.api,
    userId: engagement_ajv.userId.api,
    userPool: engagement_ajv.userPool.api,
    userType: engagement_ajv.userType.api,
    userAgent: engagement_ajv.userAgent.api,
    outcome: engagement_ajv.outcome.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['parentId'],
  },{
    required: ['eventId'],
  },{
    required: ['rawBucket'],
  },{
    required: ['rawPath'],
  },{
    required: ['eventClass'],
  },{
    required: ['eventType'],
  },{
    required: ['eventTime'],
  },{
    required: ['eventProvider'],
  },{
    required: ['eventAction'],
  },{
    required: ['eventName'],
  },{
    required: ['eventGroup'],
  },{
    required: ['eventCategory'],
  },{
    required: ['eventCode'],
  },{
    required: ['eventSeverity'],
  },{
    required: ['message'],
  },{
    required: ['reason'],
  },{
    required: ['timezone'],
  },{
    required: ['startTime'],
  },{
    required: ['endTime'],
  },{
    required: ['eventData'],
  },{
    required: ['channelId'],
  },{
    required: ['channelType'],
  },{
    required: ['resourceId'],
  },{
    required: ['resourceType'],
  },{
    required: ['sourceId'],
  },{
    required: ['sourceType'],
  },{
    required: ['userId'],
  },{
    required: ['userPool'],
  },{
    required: ['userType'],
  },{
    required: ['userAgent'],
  },{
    required: ['outcome'],
  },]
};

export default ajvInstance.compile(engagement_schema);
