import ajvInstance from '../ajv-instance';
import { organization_ajv } from '../mapper_ajv';


const organization_schema = {
  type: 'object',
  properties: {
    addressId: organization_ajv.addressId.api,
    name: organization_ajv.name.api,
    type: organization_ajv.type.api,
    phone: organization_ajv.phone.api,
    email: organization_ajv.email.api,
    nmlsId: organization_ajv.nmlsId.api,
    parentOrganizationId: organization_ajv.parentOrganizationId.api,
  },
  required: ,
  additionalProperties: false,
};

export default ajvInstance.compile(organization_schema);
