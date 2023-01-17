import ajvInstance from '../ajv-instance';
import { contactTag_ajv } from '../mapper_ajv';


const contactTag_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contactTag_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: contactTag_ajv.accountId.api},	
  },{
    required: ['name'],
    properties: { apicolname: contactTag_ajv.name.api},	
  },{
    required: ['order'],
    properties: { apicolname: contactTag_ajv.order.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: contactTag_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: contactTag_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: contactTag_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: contactTag_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: contactTag_ajv.updateRequest.api},	
  },]
};

export default ajvInstance.compile(contactTag_schema);
