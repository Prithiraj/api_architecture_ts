import ajvInstance from '../ajv-instance';
import { eventsV2_ajv } from '../mapper_ajv';


const eventsV2_schema = {
  type: 'object',
  properties: {
    eventId: eventsV2_ajv.eventId.api,
    eventCategoryId: eventsV2_ajv.eventCategoryId.api,
    eventCategory: eventsV2_ajv.eventCategory.api,
    eventTypeId: eventsV2_ajv.eventTypeId.api,
    eventType: eventsV2_ajv.eventType.api,
    eventData: eventsV2_ajv.eventData.api,
    eventProvider: eventsV2_ajv.eventProvider.api,
    rawBucket: eventsV2_ajv.rawBucket.api,
    rawPath: eventsV2_ajv.rawPath.api,
    reason: eventsV2_ajv.reason.api,
    destinationLocation: eventsV2_ajv.destinationLocation.api,
    destinationType: eventsV2_ajv.destinationType.api,
    deviceIp: eventsV2_ajv.deviceIp.api,
    deviceLocationCity: eventsV2_ajv.deviceLocationCity.api,
    deviceLocationContinent: eventsV2_ajv.deviceLocationContinent.api,
    deviceLocationCoordinatesLat: eventsV2_ajv.deviceLocationCoordinatesLat.api,
    deviceLocationCoordinatesLon: eventsV2_ajv.deviceLocationCoordinatesLon.api,
    deviceLocationCountry: eventsV2_ajv.deviceLocationCountry.api,
    deviceLocationZip: eventsV2_ajv.deviceLocationZip.api,
    deviceTimezone: eventsV2_ajv.deviceTimezone.api,
    deviceType: eventsV2_ajv.deviceType.api,
    userPool: eventsV2_ajv.userPool.api,
    destinationId: eventsV2_ajv.destinationId.api,
    eventClass: eventsV2_ajv.eventClass.api,
    eventCode: eventsV2_ajv.eventCode.api,
    eventTime: eventsV2_ajv.eventTime.api,
    referralId: eventsV2_ajv.referralId.api,
    referralType: eventsV2_ajv.referralType.api,
    startTime: eventsV2_ajv.startTime.api,
    resourceType: eventsV2_ajv.resourceType.api,
    sourceType: eventsV2_ajv.sourceType.api,
    channelType: eventsV2_ajv.channelType.api,
    eventSeverity: eventsV2_ajv.eventSeverity.api,
    ownerId: eventsV2_ajv.ownerId.api,
    timeZone: eventsV2_ajv.timeZone.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventId'],
  },{
    required: ['eventCategoryId'],
  },{
    required: ['eventCategory'],
  },{
    required: ['eventTypeId'],
  },{
    required: ['eventType'],
  },{
    required: ['eventData'],
  },{
    required: ['eventProvider'],
  },{
    required: ['rawBucket'],
  },{
    required: ['rawPath'],
  },{
    required: ['reason'],
  },{
    required: ['destinationLocation'],
  },{
    required: ['destinationType'],
  },{
    required: ['deviceIp'],
  },{
    required: ['deviceLocationCity'],
  },{
    required: ['deviceLocationContinent'],
  },{
    required: ['deviceLocationCoordinatesLat'],
  },{
    required: ['deviceLocationCoordinatesLon'],
  },{
    required: ['deviceLocationCountry'],
  },{
    required: ['deviceLocationZip'],
  },{
    required: ['deviceTimezone'],
  },{
    required: ['deviceType'],
  },{
    required: ['userPool'],
  },{
    required: ['destinationId'],
  },{
    required: ['eventClass'],
  },{
    required: ['eventCode'],
  },{
    required: ['eventTime'],
  },{
    required: ['referralId'],
  },{
    required: ['referralType'],
  },{
    required: ['startTime'],
  },{
    required: ['resourceType'],
  },{
    required: ['sourceType'],
  },{
    required: ['channelType'],
  },{
    required: ['eventSeverity'],
  },{
    required: ['ownerId'],
  },{
    required: ['timeZone'],
  },]
};

export default ajvInstance.compile(eventsV2_schema);
