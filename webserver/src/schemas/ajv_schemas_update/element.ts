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
    required: ['createTime'],
    properties: { apicolname: element_ajv.createTime.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: element_ajv.createdBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: element_ajv.updateTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: element_ajv.createRequest.api},	
  },{
    required: ['data'],
    properties: { apicolname: element_ajv.data.api},	
  },]
};

export default ajvInstance.compile(element_schema);
