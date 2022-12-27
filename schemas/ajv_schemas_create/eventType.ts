import ajvInstance from '../ajv-instance';
import { eventType_ajv } from '../mapper_ajv';


const eventType_schema = {
  type: 'object',
  properties: {
    id: eventType_ajv.id.api,
    eventType: eventType_ajv.eventType.api,
    eventCategoryId: eventType_ajv.eventCategoryId.api,
    eventTypeDescription: eventType_ajv.eventTypeDescription.api,
    dbAction: eventType_ajv.dbAction.api,
    createdAt: eventType_ajv.createdAt.api,
    updatedAt: eventType_ajv.updatedAt.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(eventType_schema);
