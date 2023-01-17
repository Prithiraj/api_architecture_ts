import ajvInstance from '../ajv-instance';
import { bridgeContactContact_ajv } from '../mapper_ajv';


const bridgeContactContact_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
    properties: { apicolname: bridgeContactContact_ajv.contactId.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: bridgeContactContact_ajv.accountId.api},	
  },{
    required: ['assignedTo'],
    properties: { apicolname: bridgeContactContact_ajv.assignedTo.api},	
  },{
    required: ['relationship'],
    properties: { apicolname: bridgeContactContact_ajv.relationship.api},	
  },{
    required: ['assignedBy'],
    properties: { apicolname: bridgeContactContact_ajv.assignedBy.api},	
  },{
    required: ['assignTime'],
    properties: { apicolname: bridgeContactContact_ajv.assignTime.api},	
  },{
    required: ['assignRequest'],
    properties: { apicolname: bridgeContactContact_ajv.assignRequest.api},	
  },{
    required: ['id'],
    properties: { apicolname: bridgeContactContact_ajv.id.api},	
  },]
};

export default ajvInstance.compile(bridgeContactContact_schema);
