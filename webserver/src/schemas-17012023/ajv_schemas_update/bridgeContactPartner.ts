import ajvInstance from '../ajv-instance';
import { bridgeContactPartner_ajv } from '../mapper_ajv';


const bridgeContactPartner_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: bridgeContactPartner_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: bridgeContactPartner_ajv.accountId.api},	
  },{
    required: ['contactId'],
    properties: { apicolname: bridgeContactPartner_ajv.contactId.api},	
  },{
    required: ['partnerId'],
    properties: { apicolname: bridgeContactPartner_ajv.partnerId.api},	
  },{
    required: ['type'],
    properties: { apicolname: bridgeContactPartner_ajv.type.api},	
  },{
    required: ['assignedBy'],
    properties: { apicolname: bridgeContactPartner_ajv.assignedBy.api},	
  },{
    required: ['assignTime'],
    properties: { apicolname: bridgeContactPartner_ajv.assignTime.api},	
  },{
    required: ['assignRequest'],
    properties: { apicolname: bridgeContactPartner_ajv.assignRequest.api},	
  },]
};

export default ajvInstance.compile(bridgeContactPartner_schema);
