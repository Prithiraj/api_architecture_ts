import ajvInstance from '../ajv-instance';
import { contactCustomFieldValue_ajv } from '../mapper_ajv';


const contactCustomFieldValue_schema = {
  type: 'object',
  properties: {
    accountId: contactCustomFieldValue_ajv.accountId.api,
    contactId: contactCustomFieldValue_ajv.contactId.api,
    customFieldId: contactCustomFieldValue_ajv.customFieldId.api,
    value: contactCustomFieldValue_ajv.value.api,
    id: contactCustomFieldValue_ajv.id.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(contactCustomFieldValue_schema);
