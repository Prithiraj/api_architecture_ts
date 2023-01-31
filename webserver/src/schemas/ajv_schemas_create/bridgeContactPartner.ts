import ajvInstance from '../ajv-instance';
import { bridgeContactPartner_ajv } from '../mapper_ajv';


const bridgeContactPartner_schema = {
  type: 'object',
  properties: {
    contactId: bridgeContactPartner_ajv.contactId.api,
    partnerId: bridgeContactPartner_ajv.partnerId.api,
    type: bridgeContactPartner_ajv.type.api,
    assignedBy: bridgeContactPartner_ajv.assignedBy.api,
    assignTime: bridgeContactPartner_ajv.assignTime.api,
    assignRequest: bridgeContactPartner_ajv.assignRequest.api,
  },
  required: ['contactId', 'assignedBy', 'assignTime', 'assignRequest', 'partnerId'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactPartner_schema);
