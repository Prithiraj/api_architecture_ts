import ajvInstance from '../ajv-instance';
import { contactCustomFieldValue_ajv } from '../mapper_ajv';


const contactCustomFieldValue_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['accountId'],
    properties: { apicolname: contactCustomFieldValue_ajv.accountId.api},	
  },{
    required: ['contactId'],
    properties: { apicolname: contactCustomFieldValue_ajv.contactId.api},	
  },{
    required: ['customFieldId'],
    properties: { apicolname: contactCustomFieldValue_ajv.customFieldId.api},	
  },{
    required: ['value'],
    properties: { apicolname: contactCustomFieldValue_ajv.value.api},	
  },{
    required: ['id'],
    properties: { apicolname: contactCustomFieldValue_ajv.id.api},	
  },]
};

export default ajvInstance.compile(contactCustomFieldValue_schema);
