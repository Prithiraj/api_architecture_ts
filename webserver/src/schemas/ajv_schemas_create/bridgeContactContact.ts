import ajvInstance from '../ajv-instance';
import { bridgeContactContact_ajv } from '../mapper_ajv';


const bridgeContactContact_schema = {
  type: 'object',
  properties: {
    contactId: bridgeContactContact_ajv.contactId.api,
    assignedTo: bridgeContactContact_ajv.assignedTo.api,
    relationship: bridgeContactContact_ajv.relationship.api,
    assignedBy: bridgeContactContact_ajv.assignedBy.api,
    assignTime: bridgeContactContact_ajv.assignTime.api,
    assignRequest: bridgeContactContact_ajv.assignRequest.api,
    id: bridgeContactContact_ajv.id.api,
  },
  required: ['id', 'relationship', 'assignTime', 'assignRequest', 'assignedTo', 'contactId', 'assignedBy'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactContact_schema);
