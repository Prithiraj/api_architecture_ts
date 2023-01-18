import ajvInstance from '../ajv-instance';
import { element_ajv } from '../mapper_ajv';


const element_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['templateId'],
    properties: { apicolname: element_ajv.templateId.api},	
  },{
    required: ['data'],
    properties: { apicolname: element_ajv.data.api},	
  },{
    required: ['type'],
    properties: { apicolname: element_ajv.type.api},	
  },{
    required: ['latestVersionId'],
    properties: { apicolname: element_ajv.latestVersionId.api},	
  },{
    required: ['latestTemplate'],
    properties: { apicolname: element_ajv.latestTemplate.api},	
  },]
};

export default ajvInstance.compile(element_schema);
