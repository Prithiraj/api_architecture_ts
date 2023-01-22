import ajvInstance from '../ajv-instance';
import { contactPermission_ajv } from '../mapper_ajv';


const contactPermission_schema = {
  type: 'object',
  properties: {
    id: contactPermission_ajv.id.api,
    contactId: contactPermission_ajv.contactId.api,
    ownerAccountId: contactPermission_ajv.ownerAccountId.api,
    sharedAccountId: contactPermission_ajv.sharedAccountId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
  },{
    required: ['ownerAccountId'],
  },{
    required: ['sharedAccountId'],
  },]
};

export default ajvInstance.compile(contactPermission_schema);
