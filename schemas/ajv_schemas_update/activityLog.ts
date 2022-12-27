import ajvInstance from '../ajv-instance';
import { activityLog_ajv } from '../mapper_ajv';


const activityLog_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: activityLog_ajv.id.api},	
  },{
    required: ['eventId'],
    properties: { apicolname: activityLog_ajv.eventId.api},	
  },{
    required: ['eventCategoryId'],
    properties: { apicolname: activityLog_ajv.eventCategoryId.api},	
  },{
    required: ['eventCategory'],
    properties: { apicolname: activityLog_ajv.eventCategory.api},	
  },{
    required: ['eventTypeId'],
    properties: { apicolname: activityLog_ajv.eventTypeId.api},	
  },{
    required: ['eventType'],
    properties: { apicolname: activityLog_ajv.eventType.api},	
  },{
    required: ['historyData'],
    properties: { apicolname: activityLog_ajv.historyData.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: activityLog_ajv.createTime.api},	
  },{
    required: ['endTime'],
    properties: { apicolname: activityLog_ajv.endTime.api},	
  },{
    required: ['eventClass'],
    properties: { apicolname: activityLog_ajv.eventClass.api},	
  },{
    required: ['eventCode'],
    properties: { apicolname: activityLog_ajv.eventCode.api},	
  },{
    required: ['eventData'],
    properties: { apicolname: activityLog_ajv.eventData.api},	
  },{
    required: ['eventSeverity'],
    properties: { apicolname: activityLog_ajv.eventSeverity.api},	
  },{
    required: ['eventTime'],
    properties: { apicolname: activityLog_ajv.eventTime.api},	
  },{
    required: ['message'],
    properties: { apicolname: activityLog_ajv.message.api},	
  },{
    required: ['ownerId'],
    properties: { apicolname: activityLog_ajv.ownerId.api},	
  },{
    required: ['reason'],
    properties: { apicolname: activityLog_ajv.reason.api},	
  },{
    required: ['startTime'],
    properties: { apicolname: activityLog_ajv.startTime.api},	
  },{
    required: ['timeZone'],
    properties: { apicolname: activityLog_ajv.timeZone.api},	
  },{
    required: ['channelId'],
    properties: { apicolname: activityLog_ajv.channelId.api},	
  },{
    required: ['channelType'],
    properties: { apicolname: activityLog_ajv.channelType.api},	
  },{
    required: ['resourceType'],
    properties: { apicolname: activityLog_ajv.resourceType.api},	
  },{
    required: ['sourceType'],
    properties: { apicolname: activityLog_ajv.sourceType.api},	
  },]
};

export default ajvInstance.compile(activityLog_schema);
