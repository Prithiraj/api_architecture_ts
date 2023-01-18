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
    required: ['parentOrganizationId'],
    properties: { apicolname: organization_ajv.parentOrganizationId.api},	
  },]
};

export default ajvInstance.compile(organization_schema);
