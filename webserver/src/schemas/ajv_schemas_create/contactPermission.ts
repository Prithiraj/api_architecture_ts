import ajvInstance from '../ajv-instance';
import { contactPermission_ajv } from '../mapper_ajv';


const contactPermission_schema = {
  type: 'object',
  properties: {
    contactId: contactPermission_ajv.contactId.api,
    ownerAccountId: contactPermission_ajv.ownerAccountId.api,
    sharedAccountId: contactPermission_ajv.sharedAccountId.api,
  },
  required: ['ownerAccountId', 'contactId', 'sharedAccountId'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactPermission_schema);
