import ajvInstance from '../ajv-instance';
import { bridgeContactTag_ajv } from '../mapper_ajv';


const bridgeContactTag_schema = {
  type: 'object',
  properties: {
    assignedBy: bridgeContactTag_ajv.assignedBy.api,
    assignTime: bridgeContactTag_ajv.assignTime.api,
    assignRequest: bridgeContactTag_ajv.assignRequest.api,
    id: bridgeContactTag_ajv.id.api,
  },
  required: ['assignRequest', 'assignedBy', 'id', 'assignTime'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactTag_schema);
