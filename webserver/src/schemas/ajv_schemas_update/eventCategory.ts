import ajvInstance from '../ajv-instance';
import { eventCategory_ajv } from '../mapper_ajv';


const eventCategory_schema = {
  type: 'object',
  properties: {
    id: eventCategory_ajv.id.api,
    eventCategoryName: eventCategory_ajv.eventCategoryName.api,
    eventTargetedToTableName: eventCategory_ajv.eventTargetedToTableName.api,
    eventCategoryDescription: eventCategory_ajv.eventCategoryDescription.api,
    createdAt: eventCategory_ajv.createdAt.api,
    updatedAt: eventCategory_ajv.updatedAt.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventCategoryName'],
  },{
    required: ['eventTargetedToTableName'],
  },{
    required: ['eventCategoryDescription'],
  },{
    required: ['createdAt'],
  },{
    required: ['updatedAt'],
  },]
};

export default ajvInstance.compile(eventCategory_schema);
