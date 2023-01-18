import ajvInstance from '../ajv-instance';
import { links_ajv } from '../mapper_ajv';


const links_schema = {
  type: 'object',
  properties: {
    destinationId: links_ajv.destinationId.api,
  },
  required: ['destinationId', 'sourceId'],
  additionalProperties: false,
};

export default ajvInstance.compile(links_schema);
