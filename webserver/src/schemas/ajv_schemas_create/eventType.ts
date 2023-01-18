import ajvInstance from '../ajv-instance';
import { eventType_ajv } from '../mapper_ajv';


const eventType_schema = {
  type: 'object',
  properties: {
    eventType: eventType_ajv.eventType.api,
    eventTypeDescription: eventType_ajv.eventTypeDescription.api,
    createdAt: eventType_ajv.createdAt.api,
    updatedAt: eventType_ajv.updatedAt.api,
    eventCategoryId: eventType_ajv.eventCategoryId.api,
    dbAction: eventType_ajv.dbAction.api,
  },
  required: ['createdAt', 'eventType', 'eventCategoryId'],
  additionalProperties: false,
};

export default ajvInstance.compile(eventType_schema);
