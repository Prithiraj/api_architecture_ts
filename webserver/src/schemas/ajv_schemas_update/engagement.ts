import ajvInstance from '../ajv-instance';
import { engagement_ajv } from '../mapper_ajv';


const engagement_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['parentId'],
    properties: { apicolname: engagement_ajv.parentId.api},	
  },{
    required: ['eventId'],
    properties: { apicolname: engagement_ajv.eventId.api},	
  },{
    required: ['rawBucket'],
    properties: { apicolname: engagement_ajv.rawBucket.api},	
  },{
    required: ['rawPath'],
    properties: { apicolname: engagement_ajv.rawPath.api},	
  },{
    required: ['eventClass'],
    properties: { apicolname: engagement_ajv.eventClass.api},	
  },{
    required: ['eventType'],
    properties: { apicolname: engagement_ajv.eventType.api},	
  },{
    required: ['eventTime'],
    properties: { apicolname: engagement_ajv.eventTime.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: engagement_ajv.createTime.api},	
  },{
    required: ['eventProvider'],
    properties: { apicolname: engagement_ajv.eventProvider.api},	
  },{
    required: ['eventAction'],
    properties: { apicolname: engagement_ajv.eventAction.api},	
  },{
    required: ['eventName'],
    properties: { apicolname: engagement_ajv.eventName.api},	
  },{
    required: ['eventCategory'],
    properties: { apicolname: engagement_ajv.eventCategory.api},	
  },{
    required: ['eventCode'],
    properties: { apicolname: engagement_ajv.eventCode.api},	
  },{
    required: ['eventSeverity'],
    properties: { apicolname: engagement_ajv.eventSeverity.api},	
  },{
    required: ['outcome'],
    properties: { apicolname: engagement_ajv.outcome.api},	
  },{
    required: ['message'],
    properties: { apicolname: engagement_ajv.message.api},	
  },{
    required: ['timezone'],
    properties: { apicolname: engagement_ajv.timezone.api},	
  },{
    required: ['startTime'],
    properties: { apicolname: engagement_ajv.startTime.api},	
  },{
    required: ['endTime'],
    properties: { apicolname: engagement_ajv.endTime.api},	
  },{
    required: ['eventData'],
    properties: { apicolname: engagement_ajv.eventData.api},	
  },{
    required: ['channelType'],
    properties: { apicolname: engagement_ajv.channelType.api},	
  },{
    required: ['resourceId'],
    properties: { apicolname: engagement_ajv.resourceId.api},	
  },{
    required: ['resourceType'],
    properties: { apicolname: engagement_ajv.resourceType.api},	
  },{
    required: ['sourceId'],
    properties: { apicolname: engagement_ajv.sourceId.api},	
  },{
    required: ['sourceType'],
    properties: { apicolname: engagement_ajv.sourceType.api},	
  },{
    required: ['userAgent'],
    properties: { apicolname: engagement_ajv.userAgent.api},	
  },{
    required: ['userPool'],
    properties: { apicolname: engagement_ajv.userPool.api},	
  },{
    required: ['userType'],
    properties: { apicolname: engagement_ajv.userType.api},	
  },{
    required: ['testCol01'],
    properties: { apicolname: engagement_ajv.testCol01.api},	
  },{
    required: ['reason'],
    properties: { apicolname: engagement_ajv.reason.api},	
  },{
    required: ['channelId'],
    properties: { apicolname: engagement_ajv.channelId.api},	
  },{
    required: ['userId'],
    properties: { apicolname: engagement_ajv.userId.api},	
  },]
};

export default ajvInstance.compile(engagement_schema);
