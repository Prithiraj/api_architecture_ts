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
  },]
};

export default ajvInstance.compile(workflowState_schema);
