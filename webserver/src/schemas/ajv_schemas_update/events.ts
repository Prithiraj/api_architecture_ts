import ajvInstance from '../ajv-instance';
import { events_ajv } from '../mapper_ajv';


const events_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventAction'],
    properties: { apicolname: events_ajv.eventAction.api},	
  },{
    required: ['eventCategory'],
    properties: { apicolname: events_ajv.eventCategory.api},	
  },{
    required: ['eventCode'],
    properties: { apicolname: events_ajv.eventCode.api},	
  },{
    required: ['eventData'],
    properties: { apicolname: events_ajv.eventData.api},	
  },{
    required: ['eventId'],
    properties: { apicolname: events_ajv.eventId.api},	
  },{
    required: ['eventName'],
    properties: { apicolname: events_ajv.eventName.api},	
  },{
    required: ['eventProvider'],
    properties: { apicolname: events_ajv.eventProvider.api},	
  },{
    required: ['eventSeverity'],
    properties: { apicolname: events_ajv.eventSeverity.api},	
  },{
    required: ['eventType'],
    properties: { apicolname: events_ajv.eventType.api},	
  },{
    required: ['message'],
    properties: { apicolname: events_ajv.message.api},	
  },{
    required: ['outcome'],
    properties: { apicolname: events_ajv.outcome.api},	
  },{
    required: ['parentId'],
    properties: { apicolname: events_ajv.parentId.api},	
  },{
    required: ['rawBucket'],
    properties: { apicolname: events_ajv.rawBucket.api},	
  },{
    required: ['rawPath'],
    properties: { apicolname: events_ajv.rawPath.api},	
  },{
    required: ['reason'],
    properties: { apicolname: events_ajv.reason.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: events_ajv.createTime.api},	
  },{
    required: ['startTime'],
    properties: { apicolname: events_ajv.startTime.api},	
  },{
    required: ['destinationId'],
    properties: { apicolname: events_ajv.destinationId.api},	
  },{
    required: ['channelId'],
    properties: { apicolname: events_ajv.channelId.api},	
  },{
    required: ['channelType'],
    properties: { apicolname: events_ajv.channelType.api},	
  },{
    required: ['destinationType'],
    properties: { apicolname: events_ajv.destinationType.api},	
  },{
    required: ['deviceLocationContinent'],
    properties: { apicolname: events_ajv.deviceLocationContinent.api},	
  },{
    required: ['deviceLocationCoordinatesLat'],
    properties: { apicolname: events_ajv.deviceLocationCoordinatesLat.api},	
  },{
    required: ['deviceLocationCoordinatesLon'],
    properties: { apicolname: events_ajv.deviceLocationCoordinatesLon.api},	
  },{
    required: ['deviceLocationZip'],
    properties: { apicolname: events_ajv.deviceLocationZip.api},	
  },{
    required: ['referralId'],
    properties: { apicolname: events_ajv.referralId.api},	
  },{
    required: ['referralType'],
    properties: { apicolname: events_ajv.referralType.api},	
  },{
    required: ['resourceType'],
    properties: { apicolname: events_ajv.resourceType.api},	
  },{
    required: ['sourceId'],
    properties: { apicolname: events_ajv.sourceId.api},	
  },{
    required: ['sourceType'],
    properties: { apicolname: events_ajv.sourceType.api},	
  },{
    required: ['userAgent'],
    properties: { apicolname: events_ajv.userAgent.api},	
  },{
    required: ['userPool'],
    properties: { apicolname: events_ajv.userPool.api},	
  },{
    required: ['timezone'],
    properties: { apicolname: events_ajv.timezone.api},	
  },{
    required: ['endTime'],
    properties: { apicolname: events_ajv.endTime.api},	
  },{
    required: ['deviceLocationCountry'],
    properties: { apicolname: events_ajv.deviceLocationCountry.api},	
  },{
    required: ['deviceTimezone'],
    properties: { apicolname: events_ajv.deviceTimezone.api},	
  },{
    required: ['deviceIp'],
    properties: { apicolname: events_ajv.deviceIp.api},	
  },{
    required: ['resourceId'],
    properties: { apicolname: events_ajv.resourceId.api},	
  },{
    required: ['destinationLocation'],
    properties: { apicolname: events_ajv.destinationLocation.api},	
  },{
    required: ['eventGroup'],
    properties: { apicolname: events_ajv.eventGroup.api},	
  },{
    required: ['eventClass'],
    properties: { apicolname: events_ajv.eventClass.api},	
  },]
};

export default ajvInstance.compile(events_schema);
