import ajvInstance from '../ajv-instance';
import { partner_ajv } from '../mapper_ajv';


const partner_schema = {
  type: 'object',
  properties: {
    organizationId: partner_ajv.organizationId.api,
    type: partner_ajv.type.api,
    firstName: partner_ajv.firstName.api,
    personalEmail: partner_ajv.personalEmail.api,
    workEmail: partner_ajv.workEmail.api,
    mobilePhone: partner_ajv.mobilePhone.api,
    workPhone: partner_ajv.workPhone.api,
    addressId: partner_ajv.addressId.api,
    lastName: partner_ajv.lastName.api,
  },
  required: ['firstName', 'lastName'],
  additionalProperties: false,
};

export default ajvInstance.compile(partner_schema);
