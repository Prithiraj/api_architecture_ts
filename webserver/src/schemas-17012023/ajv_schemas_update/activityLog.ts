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
    required: ['eventTypeId'],
    properties: { apicolname: activityLog_ajv.eventTypeId.api},	
  },{
    required: ['historyData'],
    properties: { apicolname: activityLog_ajv.historyData.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: activityLog_ajv.createTime.api},	
  },{
    required: ['eventClass'],
    properties: { apicolname: activityLog_ajv.eventClass.api},	
  },{
    required: ['eventData'],
    properties: { apicolname: activityLog_ajv.eventData.api},	
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
    required: ['startTime'],
    properties: { apicolname: activityLog_ajv.startTime.api},	
  },{
    required: ['channelId'],
    properties: { apicolname: activityLog_ajv.channelId.api},	
  },{
    required: ['resourceType'],
    properties: { apicolname: activityLog_ajv.resourceType.api},	
  },{
    required: ['contactId'],
    properties: { apicolname: activityLog_ajv.contactId.api},	
  },{
    required: ['masterEventTime'],
    properties: { apicolname: activityLog_ajv.masterEventTime.api},	
  },{
    required: ['userId'],
    properties: { apicolname: activityLog_ajv.userId.api},	
  },]
};

export default ajvInstance.compile(activityLog_schema);
