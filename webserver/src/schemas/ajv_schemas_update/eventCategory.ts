import ajvInstance from '../ajv-instance';
import { eventCategory_ajv } from '../mapper_ajv';


const eventCategory_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventCategoryName'],
    properties: { apicolname: eventCategory_ajv.eventCategoryName.api},	
  },{
    required: ['eventTargetedToTableName'],
    properties: { apicolname: eventCategory_ajv.eventTargetedToTableName.api},	
  },{
    required: ['eventCategoryDescription'],
    properties: { apicolname: eventCategory_ajv.eventCategoryDescription.api},	
  },{
    required: ['createdAt'],
    properties: { apicolname: eventCategory_ajv.createdAt.api},	
  },{
    required: ['updatedAt'],
    properties: { apicolname: eventCategory_ajv.updatedAt.api},	
  },]
};

export default ajvInstance.compile(eventCategory_schema);
