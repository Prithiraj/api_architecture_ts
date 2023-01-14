import ajvInstance from '../ajv-instance';
import { links_ajv } from '../mapper_ajv';


const links_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: links_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: links_ajv.accountId.api},	
  },{
    required: ['sourceId'],
    properties: { apicolname: links_ajv.sourceId.api},	
  },{
    required: ['destinationId'],
    properties: { apicolname: links_ajv.destinationId.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: links_ajv.createTime.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: links_ajv.createdBy.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: links_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: links_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: links_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: links_ajv.createRequest.api},	
  },]
};

export default ajvInstance.compile(links_schema);
