import ajvInstance from '../ajv-instance';
import { bridgeContactLoan_ajv } from '../mapper_ajv';


const bridgeContactLoan_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
    properties: { apicolname: bridgeContactLoan_ajv.contactId.api},	
  },{
    required: ['loanId'],
    properties: { apicolname: bridgeContactLoan_ajv.loanId.api},	
  },{
    required: ['assignedBy'],
    properties: { apicolname: bridgeContactLoan_ajv.assignedBy.api},	
  },{
    required: ['assignTime'],
    properties: { apicolname: bridgeContactLoan_ajv.assignTime.api},	
  },{
    required: ['assignRequest'],
    properties: { apicolname: bridgeContactLoan_ajv.assignRequest.api},	
  },{
    required: ['type'],
    properties: { apicolname: bridgeContactLoan_ajv.type.api},	
  },{
    required: ['id'],
    properties: { apicolname: bridgeContactLoan_ajv.id.api},	
  },]
};

export default ajvInstance.compile(bridgeContactLoan_schema);
