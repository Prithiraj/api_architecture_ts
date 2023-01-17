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
    required: ['accountId'],
    properties: { apicolname: template_ajv.accountId.api},	
  },{
    required: ['id'],
    properties: { apicolname: template_ajv.id.api},	
  },{
    required: ['type'],
    properties: { apicolname: template_ajv.type.api},	
  },{
    required: ['name'],
    properties: { apicolname: template_ajv.name.api},	
  },{
    required: ['data'],
    properties: { apicolname: template_ajv.data.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: template_ajv.createTime.api},	
  },{
    required: ['thumbnail'],
    properties: { apicolname: template_ajv.thumbnail.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: template_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: template_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: template_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: template_ajv.createRequest.api},	
  },]
};

export default ajvInstance.compile(template_schema);
