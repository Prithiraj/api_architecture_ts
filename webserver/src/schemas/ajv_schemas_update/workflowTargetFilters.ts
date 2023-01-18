import ajvInstance from '../ajv-instance';
import { workflowTargetFilters_ajv } from '../mapper_ajv';


const workflowTargetFilters_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['query'],
    properties: { apicolname: workflowTargetFilters_ajv.query.api},	
  },]
};

export default ajvInstance.compile(workflowTargetFilters_schema);
