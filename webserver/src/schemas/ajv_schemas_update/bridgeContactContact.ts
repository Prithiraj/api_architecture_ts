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
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
  },{
    required: ['assignedTo'],
  },{
    required: ['relationship'],
  },{
    required: ['assignedBy'],
  },{
    required: ['assignTime'],
  },{
    required: ['assignRequest'],
  },]
};

export default ajvInstance.compile(bridgeContactContact_schema);
