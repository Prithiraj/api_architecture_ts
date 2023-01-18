import ajvInstance from '../ajv-instance';
import { partner_ajv } from '../mapper_ajv';


const partner_schema = {
  type: 'object',
  properties: {
    id: partner_ajv.id.api,
    organizationId: partner_ajv.organizationId.api,
    type: partner_ajv.type.api,
    firstName: partner_ajv.firstName.api,
    personalEmail: partner_ajv.personalEmail.api,
    workEmail: partner_ajv.workEmail.api,
    mobilePhone: partner_ajv.mobilePhone.api,
    workPhone: partner_ajv.workPhone.api,
    addressId: partner_ajv.addressId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['organizationId'],
  },{
    required: ['type'],
  },{
    required: ['firstName'],
  },{
    required: ['personalEmail'],
  },{
    required: ['workEmail'],
  },{
    required: ['mobilePhone'],
  },{
    required: ['workPhone'],
  },{
    required: ['addressId'],
  },]
};

export default ajvInstance.compile(partner_schema);
