import ajvInstance from '../ajv-instance';
import { eventType_ajv } from '../mapper_ajv';


const eventType_schema = {
  type: 'object',
  properties: {
    id: eventType_ajv.id.api,
    eventType: eventType_ajv.eventType.api,
    eventTypeDescription: eventType_ajv.eventTypeDescription.api,
    createdAt: eventType_ajv.createdAt.api,
    updatedAt: eventType_ajv.updatedAt.api,
    eventCategoryId: eventType_ajv.eventCategoryId.api,
    dbAction: eventType_ajv.dbAction.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventType'],
  },{
    required: ['eventTypeDescription'],
  },{
    required: ['createdAt'],
  },{
    required: ['updatedAt'],
  },{
    required: ['eventCategoryId'],
  },{
    required: ['dbAction'],
  },]
};

export default ajvInstance.compile(eventType_schema);
