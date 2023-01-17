import ajvInstance from '../ajv-instance';
import { contactCustomFieldSection_ajv } from '../mapper_ajv';


const contactCustomFieldSection_schema = {
  type: 'object',
  properties: {
    sectionName: contactCustomFieldSection_ajv.sectionName.api,
  },
  required: ['sectionName'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactCustomFieldSection_schema);
