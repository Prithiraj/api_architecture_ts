import ajvInstance from '../ajv-instance';
import { workflowtoworkflowTargetFilters_ajv } from '../mapper_ajv';


const workflowtoworkflowTargetFilters_schema = {
  type: 'object',
  properties: {
    A: workflowtoworkflowTargetFilters_ajv.A.api,
    B: workflowtoworkflowTargetFilters_ajv.B.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['A'],
  },{
    required: ['B'],
  },]
};

export default ajvInstance.compile(workflowtoworkflowTargetFilters_schema);
