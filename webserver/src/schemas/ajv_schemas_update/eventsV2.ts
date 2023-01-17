import ajvInstance from '../ajv-instance';
import { eventsV2_ajv } from '../mapper_ajv';


const eventsV2_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventId'],
    properties: { apicolname: eventsV2_ajv.eventId.api},	
  },{
    required: ['eventCategoryId'],
    properties: { apicolname: eventsV2_ajv.eventCategoryId.api},	
  },{
    required: ['eventCategory'],
    properties: { apicolname: eventsV2_ajv.eventCategory.api},	
  },{
    required: ['eventTypeId'],
    properties: { apicolname: eventsV2_ajv.eventTypeId.api},	
  },{
    required: ['eventType'],
    properties: { apicolname: eventsV2_ajv.eventType.api},	
  },{
    required: ['eventData'],
    properties: { apicolname: eventsV2_ajv.eventData.api},	
  },{
    required: ['eventProvider'],
    properties: { apicolname: eventsV2_ajv.eventProvider.api},	
  },{
    required: ['rawBucket'],
    properties: { apicolname: eventsV2_ajv.rawBucket.api},	
  },{
    required: ['rawPath'],
    properties: { apicolname: eventsV2_ajv.rawPath.api},	
  },{
    required: ['reason'],
    properties: { apicolname: eventsV2_ajv.reason.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: eventsV2_ajv.createTime.api},	
  },{
    required: ['destinationLocation'],
    properties: { apicolname: eventsV2_ajv.destinationLocation.api},	
  },{
    required: ['destinationType'],
    properties: { apicolname: eventsV2_ajv.destinationType.api},	
  },{
    required: ['deviceIp'],
    properties: { apicolname: eventsV2_ajv.deviceIp.api},	
  },{
    required: ['deviceLocationCity'],
    properties: { apicolname: eventsV2_ajv.deviceLocationCity.api},	
  },{
    required: ['deviceLocationContinent'],
    properties: { apicolname: eventsV2_ajv.deviceLocationContinent.api},	
  },{
    required: ['deviceLocationCoordinatesLat'],
    properties: { apicolname: eventsV2_ajv.deviceLocationCoordinatesLat.api},	
  },{
    required: ['deviceLocationCoordinatesLon'],
    properties: { apicolname: eventsV2_ajv.deviceLocationCoordinatesLon.api},	
  },{
    required: ['deviceLocationCountry'],
    properties: { apicolname: eventsV2_ajv.deviceLocationCountry.api},	
  },{
    required: ['deviceLocationZip'],
    properties: { apicolname: eventsV2_ajv.deviceLocationZip.api},	
  },{
    required: ['deviceTimezone'],
    properties: { apicolname: eventsV2_ajv.deviceTimezone.api},	
  },{
    required: ['deviceType'],
    properties: { apicolname: eventsV2_ajv.deviceType.api},	
  },{
    required: ['userPool'],
    properties: { apicolname: eventsV2_ajv.userPool.api},	
  },{
    required: ['destinationId'],
    properties: { apicolname: eventsV2_ajv.destinationId.api},	
  },{
    required: ['endTime'],
    properties: { apicolname: eventsV2_ajv.endTime.api},	
  },{
    required: ['eventClass'],
    properties: { apicolname: eventsV2_ajv.eventClass.api},	
  },{
    required: ['eventCode'],
    properties: { apicolname: eventsV2_ajv.eventCode.api},	
  },{
    required: ['eventTime'],
    properties: { apicolname: eventsV2_ajv.eventTime.api},	
  },{
    required: ['ownerId'],
    properties: { apicolname: eventsV2_ajv.ownerId.api},	
  },{
    required: ['referralId'],
    properties: { apicolname: eventsV2_ajv.referralId.api},	
  },{
    required: ['referralType'],
    properties: { apicolname: eventsV2_ajv.referralType.api},	
  },{
    required: ['startTime'],
    properties: { apicolname: eventsV2_ajv.startTime.api},	
  },{
    required: ['resourceType'],
    properties: { apicolname: eventsV2_ajv.resourceType.api},	
  },{
    required: ['sourceType'],
    properties: { apicolname: eventsV2_ajv.sourceType.api},	
  },{
    required: ['channelId'],
    properties: { apicolname: eventsV2_ajv.channelId.api},	
  },{
    required: ['channelType'],
    properties: { apicolname: eventsV2_ajv.channelType.api},	
  },{
    required: ['timeZone'],
    properties: { apicolname: eventsV2_ajv.timeZone.api},	
  },{
    required: ['message'],
    properties: { apicolname: eventsV2_ajv.message.api},	
  },]
};

export default ajvInstance.compile(eventsV2_schema);
