import ajvInstance from '../ajv-instance';
import { workflowState_ajv } from '../mapper_ajv';


const workflowState_schema = {
  type: 'object',
  properties: {
    workflowId: workflowState_ajv.workflowId.api,
    entityName: workflowState_ajv.entityName.api,
    apiVersion: workflowState_ajv.apiVersion.api,
    steps: workflowState_ajv.steps.api,
  },
  required: ['entityName', 'apiVersion', 'workflowId', 'steps'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowState_schema);
