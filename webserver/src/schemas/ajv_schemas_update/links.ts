import ajvInstance from '../ajv-instance';
import { links_ajv } from '../mapper_ajv';


const links_schema = {
  type: 'object',
  properties: {
    id: links_ajv.id.api,
    destinationId: links_ajv.destinationId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['destinationId'],
  },]
};

export default ajvInstance.compile(links_schema);
