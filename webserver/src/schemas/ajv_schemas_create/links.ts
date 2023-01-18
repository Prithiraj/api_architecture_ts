import ajvInstance from '../ajv-instance';
import { links_ajv } from '../mapper_ajv';


const links_schema = {
  type: 'object',
  properties: {
    sourceId: links_ajv.sourceId.api,
    destinationId: links_ajv.destinationId.api,
  },
  required: ['sourceId', 'destinationId'],
  additionalProperties: false,
};

export default ajvInstance.compile(links_schema);
