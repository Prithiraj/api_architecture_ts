import ajvInstance from '../ajv-instance';
import { links_ajv } from '../mapper_ajv';


const links_schema = {
  type: 'object',
  properties: {
    id: links_ajv.id.api,
    sourceId: links_ajv.sourceId.api,
    destinationId: links_ajv.destinationId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['sourceId'],
  },{
    required: ['destinationId'],
  },]
};

export default ajvInstance.compile(links_schema);
