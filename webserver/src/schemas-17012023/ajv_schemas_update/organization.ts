import ajvInstance from '../ajv-instance';
import { organization_ajv } from '../mapper_ajv';


const organization_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: organization_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: organization_ajv.accountId.api},	
  },{
    required: ['addressId'],
    properties: { apicolname: organization_ajv.addressId.api},	
  },{
    required: ['name'],
    properties: { apicolname: organization_ajv.name.api},	
  },{
    required: ['type'],
    properties: { apicolname: organization_ajv.type.api},	
  },{
    required: ['phone'],
    properties: { apicolname: organization_ajv.phone.api},	
  },{
    required: ['email'],
    properties: { apicolname: organization_ajv.email.api},	
  },{
    required: ['nmlsId'],
    properties: { apicolname: organization_ajv.nmlsId.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: organization_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: organization_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: organization_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: organization_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: organization_ajv.updateRequest.api},	
  },{
    required: ['parentOrganizationId'],
    properties: { apicolname: organization_ajv.parentOrganizationId.api},	
  },]
};

export default ajvInstance.compile(organization_schema);
