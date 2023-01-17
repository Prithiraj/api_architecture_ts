import ajvInstance from '../ajv-instance';
import { contactOtherAssociates_ajv } from '../mapper_ajv';


const contactOtherAssociates_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contactOtherAssociates_ajv.id.api},	
  },{
    required: ['contactId'],
    properties: { apicolname: contactOtherAssociates_ajv.contactId.api},	
  },{
    required: ['associateName'],
    properties: { apicolname: contactOtherAssociates_ajv.associateName.api},	
  },]
};

export default ajvInstance.compile(contactOtherAssociates_schema);
