import ajvInstance from '../ajv-instance';
import { partner_ajv } from '../mapper_ajv';


const partner_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: partner_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: partner_ajv.accountId.api},	
  },{
    required: ['organizationId'],
    properties: { apicolname: partner_ajv.organizationId.api},	
  },{
    required: ['type'],
    properties: { apicolname: partner_ajv.type.api},	
  },{
    required: ['firstName'],
    properties: { apicolname: partner_ajv.firstName.api},	
  },{
    required: ['lastName'],
    properties: { apicolname: partner_ajv.lastName.api},	
  },{
    required: ['personalEmail'],
    properties: { apicolname: partner_ajv.personalEmail.api},	
  },{
    required: ['workEmail'],
    properties: { apicolname: partner_ajv.workEmail.api},	
  },{
    required: ['mobilePhone'],
    properties: { apicolname: partner_ajv.mobilePhone.api},	
  },{
    required: ['workPhone'],
    properties: { apicolname: partner_ajv.workPhone.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: partner_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: partner_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: partner_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: partner_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: partner_ajv.updateTime.api},	
  },{
    required: ['addressId'],
    properties: { apicolname: partner_ajv.addressId.api},	
  },]
};

export default ajvInstance.compile(partner_schema);
