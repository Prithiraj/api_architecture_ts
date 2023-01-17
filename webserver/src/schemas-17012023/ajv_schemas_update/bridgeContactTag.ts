import ajvInstance from '../ajv-instance';
import { bridgeContactTag_ajv } from '../mapper_ajv';


const bridgeContactTag_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
    properties: { apicolname: bridgeContactTag_ajv.contactId.api},	
  },{
    required: ['tagId'],
    properties: { apicolname: bridgeContactTag_ajv.tagId.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: bridgeContactTag_ajv.accountId.api},	
  },{
    required: ['assignedBy'],
    properties: { apicolname: bridgeContactTag_ajv.assignedBy.api},	
  },{
    required: ['assignTime'],
    properties: { apicolname: bridgeContactTag_ajv.assignTime.api},	
  },{
    required: ['assignRequest'],
    properties: { apicolname: bridgeContactTag_ajv.assignRequest.api},	
  },{
    required: ['id'],
    properties: { apicolname: bridgeContactTag_ajv.id.api},	
  },]
};

export default ajvInstance.compile(bridgeContactTag_schema);
