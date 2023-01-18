import ajvInstance from '../ajv-instance';
import { contactCustomFieldSection_ajv } from '../mapper_ajv';


const contactCustomFieldSection_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['sectionName'],
    properties: { apicolname: contactCustomFieldSection_ajv.sectionName.api},	
  },]
};

export default ajvInstance.compile(contactCustomFieldSection_schema);
