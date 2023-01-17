import ajvInstance from '../ajv-instance';
import { workflowTargetFilters_ajv } from '../mapper_ajv';


const workflowTargetFilters_schema = {
  type: 'object',
  properties: {
    query: workflowTargetFilters_ajv.query.api,
  },
  required: ['query'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowTargetFilters_schema);
