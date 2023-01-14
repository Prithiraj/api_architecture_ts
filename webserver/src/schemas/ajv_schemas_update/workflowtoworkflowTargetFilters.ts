import ajvInstance from '../ajv-instance';
import { workflowtoworkflowTargetFilters_ajv } from '../mapper_ajv';


const workflowtoworkflowTargetFilters_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: []
};

export default ajvInstance.compile(workflowtoworkflowTargetFilters_schema);
