import ajvInstance from '../ajv-instance';
import { events_ajv } from '../mapper_ajv';


const events_schema = {
  type: 'object',
  properties: {
    eventAction: events_ajv.eventAction.api,
    eventCategory: events_ajv.eventCategory.api,
    eventClass: events_ajv.eventClass.api,
    eventCode: events_ajv.eventCode.api,
    eventData: events_ajv.eventData.api,
    eventGroup: events_ajv.eventGroup.api,
    eventId: events_ajv.eventId.api,
    eventName: events_ajv.eventName.api,
    eventSeverity: events_ajv.eventSeverity.api,
    eventType: events_ajv.eventType.api,
    message: events_ajv.message.api,
    outcome: events_ajv.outcome.api,
    parentId: events_ajv.parentId.api,
    rawPath: events_ajv.rawPath.api,
    reason: events_ajv.reason.api,
    endTime: events_ajv.endTime.api,
    eventTime: events_ajv.eventTime.api,
    startTime: events_ajv.startTime.api,
    destinationId: events_ajv.destinationId.api,
    channelId: events_ajv.channelId.api,
    channelType: events_ajv.channelType.api,
    destinationLocation: events_ajv.destinationLocation.api,
    destinationType: events_ajv.destinationType.api,
    deviceIp: events_ajv.deviceIp.api,
    deviceLocationCity: events_ajv.deviceLocationCity.api,
    deviceLocationContinent: events_ajv.deviceLocationContinent.api,
    deviceLocationCoordinatesLon: events_ajv.deviceLocationCoordinatesLon.api,
    deviceLocationCountry: events_ajv.deviceLocationCountry.api,
    deviceLocationZip: events_ajv.deviceLocationZip.api,
    deviceType: events_ajv.deviceType.api,
    referralType: events_ajv.referralType.api,
    resourceId: events_ajv.resourceId.api,
    sourceId: events_ajv.sourceId.api,
    sourceType: events_ajv.sourceType.api,
    userPool: events_ajv.userPool.api,
    timezone: events_ajv.timezone.api,
    rawBucket: events_ajv.rawBucket.api,
    resourceType: events_ajv.resourceType.api,
    deviceTimezone: events_ajv.deviceTimezone.api,
    deviceLocationCoordinatesLat: events_ajv.deviceLocationCoordinatesLat.api,
    userId: events_ajv.userId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventAction'],
  },{
    required: ['eventCategory'],
  },{
    required: ['eventClass'],
  },{
    required: ['eventCode'],
  },{
    required: ['eventData'],
  },{
    required: ['eventGroup'],
  },{
    required: ['eventId'],
  },{
    required: ['eventName'],
  },{
    required: ['eventSeverity'],
  },{
    required: ['eventType'],
  },{
    required: ['message'],
  },{
    required: ['outcome'],
  },{
    required: ['parentId'],
  },{
    required: ['rawPath'],
  },{
    required: ['reason'],
  },{
    required: ['endTime'],
  },{
    required: ['eventTime'],
  },{
    required: ['startTime'],
  },{
    required: ['destinationId'],
  },{
    required: ['channelId'],
  },{
    required: ['channelType'],
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
    required: ['deviceLocationCoordinatesLon'],
  },{
    required: ['deviceLocationCountry'],
  },{
    required: ['deviceLocationZip'],
  },{
    required: ['deviceType'],
  },{
    required: ['referralType'],
  },{
    required: ['resourceId'],
  },{
    required: ['sourceId'],
  },{
    required: ['sourceType'],
  },{
    required: ['userPool'],
  },{
    required: ['timezone'],
  },{
    required: ['rawBucket'],
  },{
    required: ['resourceType'],
  },{
    required: ['deviceTimezone'],
  },{
    required: ['deviceLocationCoordinatesLat'],
  },{
    required: ['userId'],
  },]
};

export default ajvInstance.compile(events_schema);
