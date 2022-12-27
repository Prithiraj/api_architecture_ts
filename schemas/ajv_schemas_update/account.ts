import ajvInstance from '../ajv-instance';
import { account_ajv } from '../mapper_ajv';


const account_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: account_ajv.id.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: account_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: account_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: account_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: account_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: account_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: account_ajv.updateRequest.api},	
  },]
};

export default ajvInstance.compile(account_schema);
