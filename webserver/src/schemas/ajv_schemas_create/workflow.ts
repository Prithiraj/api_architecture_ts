import ajvInstance from '../ajv-instance';
import { workflow_ajv } from '../mapper_ajv';


const workflow_schema = {
  type: 'object',
  properties: {
    sourceTemplate: workflow_ajv.sourceTemplate.api,
    status: workflow_ajv.status.api,
    steps: workflow_ajv.steps.api,
    targetFilter: workflow_ajv.targetFilter.api,
    apiVersion: workflow_ajv.apiVersion.api,
    entityName: workflow_ajv.entityName.api,
    firstStep: workflow_ajv.firstStep.api,
    flowType: workflow_ajv.flowType.api,
    name: workflow_ajv.name.api,
    recurring: workflow_ajv.recurring.api,
    startTime: workflow_ajv.startTime.api,
    retry: workflow_ajv.retry.api,
  },
  required: ['firstStep', 'startTime', 'name', 'apiVersion', 'entityName', 'status', 'flowType', 'targetFilter', 'steps'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflow_schema);
