import ajvInstance from '../ajv-instance';
import { elementVersion_ajv } from '../mapper_ajv';


const elementVersion_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['accountId'],
    properties: { apicolname: elementVersion_ajv.accountId.api},	
  },{
    required: ['version'],
    properties: { apicolname: elementVersion_ajv.version.api},	
  },{
    required: ['elementId'],
    properties: { apicolname: elementVersion_ajv.elementId.api},	
  },{
    required: ['name'],
    properties: { apicolname: elementVersion_ajv.name.api},	
  },{
    required: ['data'],
    properties: { apicolname: elementVersion_ajv.data.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: elementVersion_ajv.createTime.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: elementVersion_ajv.createdBy.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: elementVersion_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: elementVersion_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: elementVersion_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: elementVersion_ajv.createRequest.api},	
  },{
    required: ['id'],
    properties: { apicolname: elementVersion_ajv.id.api},	
  },]
};

export default ajvInstance.compile(elementVersion_schema);
