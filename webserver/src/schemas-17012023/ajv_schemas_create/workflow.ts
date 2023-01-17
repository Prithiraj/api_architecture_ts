import ajvInstance from '../ajv-instance';
import { workflow_ajv } from '../mapper_ajv';


const workflow_schema = {
  type: 'object',
  properties: {
    id: workflow_ajv.id.api,
    sourceTemplate: workflow_ajv.sourceTemplate.api,
    status: workflow_ajv.status.api,
    steps: workflow_ajv.steps.api,
    targetFilter: workflow_ajv.targetFilter.api,
    apiVersion: workflow_ajv.apiVersion.api,
    firstStep: workflow_ajv.firstStep.api,
    flowType: workflow_ajv.flowType.api,
    name: workflow_ajv.name.api,
    recurring: workflow_ajv.recurring.api,
    startTime: workflow_ajv.startTime.api,
    createTime: workflow_ajv.createTime.api,
    createRequest: workflow_ajv.createRequest.api,
    createdBy: workflow_ajv.createdBy.api,
    updateRequest: workflow_ajv.updateRequest.api,
    updateTime: workflow_ajv.updateTime.api,
    updatedBy: workflow_ajv.updatedBy.api,
    retry: workflow_ajv.retry.api,
  },
  required: ['status', 'steps', 'apiVersion', 'firstStep', 'flowType', 'name'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflow_schema);
