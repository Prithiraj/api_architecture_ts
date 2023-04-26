import ajvInstance from '../ajv-instance';
import { workflowTemplate_ajv } from '../mapper_ajv';


const workflowTemplate_schema = {
  type: 'object',
  properties: {
    workflowId: workflowTemplate_ajv.workflowId.api,
    workflowData: workflowTemplate_ajv.workflowData.api,
    version: workflowTemplate_ajv.version.api,
  },
  required: ['workflowData', 'workflowId', 'version'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowTemplate_schema);
