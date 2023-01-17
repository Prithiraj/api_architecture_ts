import ajvInstance from '../ajv-instance';
import { workflowTemplatePermission_ajv } from '../mapper_ajv';


const workflowTemplatePermission_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: workflowTemplatePermission_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: workflowTemplatePermission_ajv.accountId.api},	
  },{
    required: ['userId'],
    properties: { apicolname: workflowTemplatePermission_ajv.userId.api},	
  },{
    required: ['workflowTemplateId'],
    properties: { apicolname: workflowTemplatePermission_ajv.workflowTemplateId.api},	
  },{
    required: ['permission'],
    properties: { apicolname: workflowTemplatePermission_ajv.permission.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: workflowTemplatePermission_ajv.createRequest.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: workflowTemplatePermission_ajv.createTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: workflowTemplatePermission_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: workflowTemplatePermission_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: workflowTemplatePermission_ajv.updatedBy.api},	
  },]
};

export default ajvInstance.compile(workflowTemplatePermission_schema);
