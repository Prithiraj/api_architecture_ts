import ajvInstance from '../ajv-instance';
import { templateVersion_ajv } from '../mapper_ajv';


const templateVersion_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['accountId'],
    properties: { apicolname: templateVersion_ajv.accountId.api},	
  },{
    required: ['version'],
    properties: { apicolname: templateVersion_ajv.version.api},	
  },{
    required: ['type'],
    properties: { apicolname: templateVersion_ajv.type.api},	
  },{
    required: ['name'],
    properties: { apicolname: templateVersion_ajv.name.api},	
  },{
    required: ['data'],
    properties: { apicolname: templateVersion_ajv.data.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: templateVersion_ajv.createTime.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: templateVersion_ajv.createdBy.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: templateVersion_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: templateVersion_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: templateVersion_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: templateVersion_ajv.createRequest.api},	
  },{
    required: ['id'],
    properties: { apicolname: templateVersion_ajv.id.api},	
  },]
};

export default ajvInstance.compile(templateVersion_schema);
