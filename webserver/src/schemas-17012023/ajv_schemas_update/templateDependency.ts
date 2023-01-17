import ajvInstance from '../ajv-instance';
import { templateDependency_ajv } from '../mapper_ajv';


const templateDependency_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: templateDependency_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: templateDependency_ajv.accountId.api},	
  },{
    required: ['templateId'],
    properties: { apicolname: templateDependency_ajv.templateId.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: templateDependency_ajv.createTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: templateDependency_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: templateDependency_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: templateDependency_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: templateDependency_ajv.createRequest.api},	
  },{
    required: ['versionId'],
    properties: { apicolname: templateDependency_ajv.versionId.api},	
  },]
};

export default ajvInstance.compile(templateDependency_schema);
