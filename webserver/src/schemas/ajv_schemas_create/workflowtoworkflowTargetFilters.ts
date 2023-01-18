import ajvInstance from '../ajv-instance';
import { workflowtoworkflowTargetFilters_ajv } from '../mapper_ajv';


const workflowtoworkflowTargetFilters_schema = {
  type: 'object',
  properties: {
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowtoworkflowTargetFilters_schema);
