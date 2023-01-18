import ajvInstance from '../ajv-instance';
import { template_ajv } from '../mapper_ajv';


const template_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['type'],
    properties: { apicolname: template_ajv.type.api},	
  },{
    required: ['name'],
    properties: { apicolname: template_ajv.name.api},	
  },{
    required: ['data'],
    properties: { apicolname: template_ajv.data.api},	
  },{
    required: ['thumbnail'],
    properties: { apicolname: template_ajv.thumbnail.api},	
  },]
};

export default ajvInstance.compile(template_schema);
