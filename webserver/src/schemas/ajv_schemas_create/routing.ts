import ajvInstance from '../ajv-instance';
import { routing_ajv } from '../mapper_ajv';


const routing_schema = {
  type: 'object',
  properties: {
    subdomain: routing_ajv.subdomain.api,
    resourceId: routing_ajv.resourceId.api,
  },
  required: ['resourceId'],
  additionalProperties: false,
};

export default ajvInstance.compile(routing_schema);
