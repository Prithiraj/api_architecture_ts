import ajvInstance from '../ajv-instance';
import { workflowTemplate_ajv } from '../mapper_ajv';


const workflowTemplate_schema = {
  type: 'object',
  properties: {
    id: workflowTemplate_ajv.id.api,
    workflowId: workflowTemplate_ajv.workflowId.api,
    workflowData: workflowTemplate_ajv.workflowData.api,
    version: workflowTemplate_ajv.version.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['workflowId'],
  },{
    required: ['workflowData'],
  },{
    required: ['version'],
  },]
};

export default ajvInstance.compile(workflowTemplate_schema);
