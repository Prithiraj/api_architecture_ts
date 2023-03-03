import ajvInstance from '../ajv-instance';
import { bridgeContactContact_ajv } from '../mapper_ajv';


const bridgeContactContact_schema = {
  type: 'object',
  properties: {
    relationship: bridgeContactContact_ajv.relationship.api,
    assignedBy: bridgeContactContact_ajv.assignedBy.api,
    assignTime: bridgeContactContact_ajv.assignTime.api,
    assignRequest: bridgeContactContact_ajv.assignRequest.api,
    id: bridgeContactContact_ajv.id.api,
  },
  required: ['relationship', 'assignTime', 'assignedBy', 'assignRequest', 'id'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactContact_schema);
