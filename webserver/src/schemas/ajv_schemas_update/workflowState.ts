import ajvInstance from '../ajv-instance';
import { workflowState_ajv } from '../mapper_ajv';


const workflowState_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: workflowState_ajv.id.api},	
  },{
    required: ['workflowId'],
    properties: { apicolname: workflowState_ajv.workflowId.api},	
  },{
    required: ['entityName'],
    properties: { apicolname: workflowState_ajv.entityName.api},	
  },{
    required: ['apiVersion'],
    properties: { apicolname: workflowState_ajv.apiVersion.api},	
  },{
    required: ['steps'],
    properties: { apicolname: workflowState_ajv.steps.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: workflowState_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: workflowState_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: workflowState_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: workflowState_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: workflowState_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: workflowState_ajv.updateRequest.api},	
  },]
};

export default ajvInstance.compile(workflowState_schema);
