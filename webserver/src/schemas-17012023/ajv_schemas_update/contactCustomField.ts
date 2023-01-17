import ajvInstance from '../ajv-instance';
import { contactCustomField_ajv } from '../mapper_ajv';


const contactCustomField_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contactCustomField_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: contactCustomField_ajv.accountId.api},	
  },{
    required: ['name'],
    properties: { apicolname: contactCustomField_ajv.name.api},	
  },{
    required: ['type'],
    properties: { apicolname: contactCustomField_ajv.type.api},	
  },{
    required: ['order'],
    properties: { apicolname: contactCustomField_ajv.order.api},	
  },{
    required: ['purpose'],
    properties: { apicolname: contactCustomField_ajv.purpose.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: contactCustomField_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: contactCustomField_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: contactCustomField_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: contactCustomField_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: contactCustomField_ajv.updateRequest.api},	
  },{
    required: ['sectionId'],
    properties: { apicolname: contactCustomField_ajv.sectionId.api},	
  },{
    required: ['isDeleted'],
    properties: { apicolname: contactCustomField_ajv.isDeleted.api},	
  },]
};

export default ajvInstance.compile(contactCustomField_schema);
