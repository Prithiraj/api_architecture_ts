import ajvInstance from '../ajv-instance';
import { contactCustomFieldValue_ajv } from '../mapper_ajv';


const contactCustomFieldValue_schema = {
  type: 'object',
  properties: {
    value: contactCustomFieldValue_ajv.value.api,
    id: contactCustomFieldValue_ajv.id.api,
  },
  required: ['id', 'value'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactCustomFieldValue_schema);
