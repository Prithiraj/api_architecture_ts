import ajvInstance from '../ajv-instance';
import { bridgeContactUser_ajv } from '../mapper_ajv';


const bridgeContactUser_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
    properties: { apicolname: bridgeContactUser_ajv.contactId.api},	
  },{
    required: ['userId'],
    properties: { apicolname: bridgeContactUser_ajv.userId.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: bridgeContactUser_ajv.accountId.api},	
  },{
    required: ['assignedBy'],
    properties: { apicolname: bridgeContactUser_ajv.assignedBy.api},	
  },{
    required: ['assignTime'],
    properties: { apicolname: bridgeContactUser_ajv.assignTime.api},	
  },{
    required: ['assignRequest'],
    properties: { apicolname: bridgeContactUser_ajv.assignRequest.api},	
  },{
    required: ['id'],
    properties: { apicolname: bridgeContactUser_ajv.id.api},	
  },]
};

export default ajvInstance.compile(bridgeContactUser_schema);
