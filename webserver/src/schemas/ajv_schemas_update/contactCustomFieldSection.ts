import ajvInstance from '../ajv-instance';
import { contactCustomFieldSection_ajv } from '../mapper_ajv';


const contactCustomFieldSection_schema = {
  type: 'object',
  properties: {
    id: contactCustomFieldSection_ajv.id.api,
    sectionName: contactCustomFieldSection_ajv.sectionName.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['sectionName'],
  },]
};

export default ajvInstance.compile(contactCustomFieldSection_schema);
