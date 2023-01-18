import ajvInstance from '../ajv-instance';
import { eventType_ajv } from '../mapper_ajv';


const eventType_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['eventType'],
    properties: { apicolname: eventType_ajv.eventType.api},	
  },{
    required: ['eventTypeDescription'],
    properties: { apicolname: eventType_ajv.eventTypeDescription.api},	
  },{
    required: ['createdAt'],
    properties: { apicolname: eventType_ajv.createdAt.api},	
  },{
    required: ['updatedAt'],
    properties: { apicolname: eventType_ajv.updatedAt.api},	
  },{
    required: ['eventCategoryId'],
    properties: { apicolname: eventType_ajv.eventCategoryId.api},	
  },{
    required: ['dbAction'],
    properties: { apicolname: eventType_ajv.dbAction.api},	
  },]
};

export default ajvInstance.compile(eventType_schema);
