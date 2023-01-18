import ajvInstance from '../ajv-instance';
import { contactTag_ajv } from '../mapper_ajv';


const contactTag_schema = {
  type: 'object',
  properties: {
    id: contactTag_ajv.id.api,
    name: contactTag_ajv.name.api,
    order: contactTag_ajv.order.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
  },{
    required: ['order'],
  },]
};

export default ajvInstance.compile(contactTag_schema);
