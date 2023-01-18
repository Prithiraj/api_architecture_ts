import ajvInstance from '../ajv-instance';
import { bridgeContactPartner_ajv } from '../mapper_ajv';


const bridgeContactPartner_schema = {
  type: 'object',
  properties: {
    id: bridgeContactPartner_ajv.id.api,
    contactId: bridgeContactPartner_ajv.contactId.api,
    partnerId: bridgeContactPartner_ajv.partnerId.api,
    type: bridgeContactPartner_ajv.type.api,
    assignedBy: bridgeContactPartner_ajv.assignedBy.api,
    assignTime: bridgeContactPartner_ajv.assignTime.api,
    assignRequest: bridgeContactPartner_ajv.assignRequest.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
  },{
    required: ['partnerId'],
  },{
    required: ['type'],
  },{
    required: ['assignedBy'],
  },{
    required: ['assignTime'],
  },{
    required: ['assignRequest'],
  },]
};

export default ajvInstance.compile(bridgeContactPartner_schema);
