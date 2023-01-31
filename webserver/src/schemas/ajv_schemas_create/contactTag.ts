import ajvInstance from '../ajv-instance';
import { contactTag_ajv } from '../mapper_ajv';


const contactTag_schema = {
  type: 'object',
  properties: {
    name: contactTag_ajv.name.api,
    order: contactTag_ajv.order.api,
  },
  required: ['order', 'name'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactTag_schema);
