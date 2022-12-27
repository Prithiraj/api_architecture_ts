import ajvInstance from '../ajv-instance';
import { contactOtherAssociates_ajv } from '../mapper_ajv';


const contactOtherAssociates_schema = {
  type: 'object',
  properties: {
    id: contactOtherAssociates_ajv.id.api,
    contactId: contactOtherAssociates_ajv.contactId.api,
    associateName: contactOtherAssociates_ajv.associateName.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(contactOtherAssociates_schema);
