import ajvInstance from '../ajv-instance';
import { routing_ajv } from '../mapper_ajv';


const routing_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['subdomain'],
    properties: { apicolname: routing_ajv.subdomain.api},	
  },{
    required: ['resourceId'],
    properties: { apicolname: routing_ajv.resourceId.api},	
  },]
};

export default ajvInstance.compile(routing_schema);
