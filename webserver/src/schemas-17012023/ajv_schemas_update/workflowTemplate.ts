import ajvInstance from '../ajv-instance';
import { workflowTemplate_ajv } from '../mapper_ajv';


const workflowTemplate_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: workflowTemplate_ajv.id.api},	
  },{
    required: ['workflowId'],
    properties: { apicolname: workflowTemplate_ajv.workflowId.api},	
  },{
    required: ['workflowData'],
    properties: { apicolname: workflowTemplate_ajv.workflowData.api},	
  },{
    required: ['version'],
    properties: { apicolname: workflowTemplate_ajv.version.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: workflowTemplate_ajv.createRequest.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: workflowTemplate_ajv.createTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: workflowTemplate_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: workflowTemplate_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: workflowTemplate_ajv.updatedBy.api},	
  },]
};

export default ajvInstance.compile(workflowTemplate_schema);
