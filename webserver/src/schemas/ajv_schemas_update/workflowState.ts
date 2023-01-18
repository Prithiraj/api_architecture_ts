import ajvInstance from '../ajv-instance';
import { workflowState_ajv } from '../mapper_ajv';


const workflowState_schema = {
  type: 'object',
  properties: {
    id: workflowState_ajv.id.api,
    workflowId: workflowState_ajv.workflowId.api,
    entityName: workflowState_ajv.entityName.api,
    apiVersion: workflowState_ajv.apiVersion.api,
    steps: workflowState_ajv.steps.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['workflowId'],
  },{
    required: ['entityName'],
  },{
    required: ['apiVersion'],
  },{
    required: ['steps'],
  },]
};

export default ajvInstance.compile(workflowState_schema);
