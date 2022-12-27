import ajvInstance from '../ajv-instance';
import { session_ajv } from '../mapper_ajv';


const session_schema = {
  type: 'object',
  properties: {
	id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: session_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: session_ajv.accountId.api},	
  },{
    required: ['sessionStart'],
    properties: { apicolname: session_ajv.sessionStart.api},	
  },{
    required: ['sessionEnd'],
    properties: { apicolname: session_ajv.sessionEnd.api},	
  },{
    required: ['timezone'],
    properties: { apicolname: session_ajv.timezone.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: session_ajv.createdBy.api},	
  },]
};

export default ajvInstance.compile(session_schema);
