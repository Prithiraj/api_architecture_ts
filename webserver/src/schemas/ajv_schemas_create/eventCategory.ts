import ajvInstance from '../ajv-instance';
import { eventCategory_ajv } from '../mapper_ajv';


const eventCategory_schema = {
  type: 'object',
  properties: {
    eventCategoryName: eventCategory_ajv.eventCategoryName.api,
    eventTargetedToTableName: eventCategory_ajv.eventTargetedToTableName.api,
    eventCategoryDescription: eventCategory_ajv.eventCategoryDescription.api,
    createdAt: eventCategory_ajv.createdAt.api,
    updatedAt: eventCategory_ajv.updatedAt.api,
  },
  required: ['createdAt', 'eventCategoryName'],
  additionalProperties: false,
};

export default ajvInstance.compile(eventCategory_schema);
