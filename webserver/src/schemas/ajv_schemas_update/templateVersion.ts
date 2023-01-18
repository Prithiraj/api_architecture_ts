import ajvInstance from '../ajv-instance';
import { templateVersion_ajv } from '../mapper_ajv';


const templateVersion_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['version'],
    properties: { apicolname: templateVersion_ajv.version.api},	
  },{
    required: ['type'],
    properties: { apicolname: templateVersion_ajv.type.api},	
  },{
    required: ['name'],
    properties: { apicolname: templateVersion_ajv.name.api},	
  },{
    required: ['data'],
    properties: { apicolname: templateVersion_ajv.data.api},	
  },]
};

export default ajvInstance.compile(templateVersion_schema);
