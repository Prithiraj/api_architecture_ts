import ajvInstance from '../ajv-instance';
import { partner_ajv } from '../mapper_ajv';


const partner_schema = {
  type: 'object',
  properties: {
    id: partner_ajv.id.api,
    accountId: partner_ajv.accountId.api,
    organizationId: partner_ajv.organizationId.api,
    type: partner_ajv.type.api,
    firstName: partner_ajv.firstName.api,
    lastName: partner_ajv.lastName.api,
    personalEmail: partner_ajv.personalEmail.api,
    workEmail: partner_ajv.workEmail.api,
    mobilePhone: partner_ajv.mobilePhone.api,
    workPhone: partner_ajv.workPhone.api,
    createdBy: partner_ajv.createdBy.api,
    createTime: partner_ajv.createTime.api,
    createRequest: partner_ajv.createRequest.api,
    updatedBy: partner_ajv.updatedBy.api,
    updateTime: partner_ajv.updateTime.api,
    addressId: partner_ajv.addressId.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(partner_schema);
