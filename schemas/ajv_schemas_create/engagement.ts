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
    createTime: engagement_ajv.createTime.api,
    eventProvider: engagement_ajv.eventProvider.api,
    eventAction: engagement_ajv.eventAction.api,
    eventName: engagement_ajv.eventName.api,
    eventGroup: engagement_ajv.eventGroup.api,
    eventCategory: engagement_ajv.eventCategory.api,
    eventCode: engagement_ajv.eventCode.api,
    eventSeverity: engagement_ajv.eventSeverity.api,
    outcome: engagement_ajv.outcome.api,
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
    userAgent: engagement_ajv.userAgent.api,
    userId: engagement_ajv.userId.api,
    userPool: engagement_ajv.userPool.api,
    userType: engagement_ajv.userType.api,
    testCol01: engagement_ajv.testCol01.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(engagement_schema);
