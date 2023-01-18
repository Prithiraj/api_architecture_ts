import ajvInstance from '../ajv-instance';
import { elementVersion_ajv } from '../mapper_ajv';


const elementVersion_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['version'],
    properties: { apicolname: elementVersion_ajv.version.api},	
  },{
    required: ['elementId'],
    properties: { apicolname: elementVersion_ajv.elementId.api},	
  },{
    required: ['name'],
    properties: { apicolname: elementVersion_ajv.name.api},	
  },{
    required: ['data'],
    properties: { apicolname: elementVersion_ajv.data.api},	
  },]
};

export default ajvInstance.compile(elementVersion_schema);
