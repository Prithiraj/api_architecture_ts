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
    required: ['accountId'],
    properties: { apicolname: element_ajv.accountId.api},	
  },{
    required: ['templateId'],
    properties: { apicolname: element_ajv.templateId.api},	
  },{
    required: ['id'],
    properties: { apicolname: element_ajv.id.api},	
  },{
    required: ['name'],
    properties: { apicolname: element_ajv.name.api},	
  },{
    required: ['data'],
    properties: { apicolname: element_ajv.data.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: element_ajv.createTime.api},	
  },{
    required: ['type'],
    properties: { apicolname: element_ajv.type.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: element_ajv.updateRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: element_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: element_ajv.createRequest.api},	
  },]
};

export default ajvInstance.compile(element_schema);
