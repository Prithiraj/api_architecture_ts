import ajvInstance from '../ajv-instance';
import { contactCustomField_ajv } from '../mapper_ajv';


const contactCustomField_schema = {
  type: 'object',
  properties: {
    id: contactCustomField_ajv.id.api,
    name: contactCustomField_ajv.name.api,
    type: contactCustomField_ajv.type.api,
    order: contactCustomField_ajv.order.api,
    purpose: contactCustomField_ajv.purpose.api,
    sectionId: contactCustomField_ajv.sectionId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
  },{
    required: ['type'],
  },{
    required: ['order'],
  },{
    required: ['purpose'],
  },{
    required: ['sectionId'],
  },]
};

export default ajvInstance.compile(contactCustomField_schema);
