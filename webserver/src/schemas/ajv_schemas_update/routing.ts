import ajvInstance from '../ajv-instance';
import { routing_ajv } from '../mapper_ajv';


const routing_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['accountId'],
    properties: { apicolname: routing_ajv.accountId.api},	
  },{
    required: ['subdomain'],
    properties: { apicolname: routing_ajv.subdomain.api},	
  },{
    required: ['path'],
    properties: { apicolname: routing_ajv.path.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: routing_ajv.createTime.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: routing_ajv.createdBy.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: routing_ajv.updateRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: routing_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: routing_ajv.createRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: routing_ajv.updateTime.api},	
  },{
    required: ['resourceId'],
    properties: { apicolname: routing_ajv.resourceId.api},	
  },]
};

export default ajvInstance.compile(routing_schema);
