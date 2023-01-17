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
    createTime: workflowState_ajv.createTime.api,
    createRequest: workflowState_ajv.createRequest.api,
    updatedBy: workflowState_ajv.updatedBy.api,
    updateTime: workflowState_ajv.updateTime.api,
    updateRequest: workflowState_ajv.updateRequest.api,
  },
  required: ['workflowId', 'entityName', 'apiVersion', 'steps'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowState_schema);
