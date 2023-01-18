import ajvInstance from '../ajv-instance';
import { routing_ajv } from '../mapper_ajv';


const routing_schema = {
  type: 'object',
  properties: {
    subdomain: routing_ajv.subdomain.api,
    path: routing_ajv.path.api,
    resourceId: routing_ajv.resourceId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['subdomain'],
  },{
    required: ['path'],
  },{
    required: ['resourceId'],
  },]
};

export default ajvInstance.compile(routing_schema);
