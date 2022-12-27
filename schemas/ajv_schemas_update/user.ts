import ajvInstance from '../ajv-instance';
import { user_ajv } from '../mapper_ajv';


const user_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: user_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: user_ajv.accountId.api},	
  },{
    required: ['userType'],
    properties: { apicolname: user_ajv.userType.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: user_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: user_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: user_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: user_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: user_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: user_ajv.updateRequest.api},	
  },]
};

export default ajvInstance.compile(user_schema);
