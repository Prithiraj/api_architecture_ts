import ajvInstance from '../ajv-instance';
import { links_ajv } from '../mapper_ajv';


const links_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['sourceId'],
    properties: { apicolname: links_ajv.sourceId.api},	
  },{
    required: ['destinationId'],
    properties: { apicolname: links_ajv.destinationId.api},	
  },]
};

export default ajvInstance.compile(links_schema);
