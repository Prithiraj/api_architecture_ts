import ajvInstance from '../ajv-instance';
import { contactFilter_ajv } from '../mapper_ajv';


const contactFilter_schema = {
  type: 'object',
  properties: {
    id: contactFilter_ajv.id.api,
    query: contactFilter_ajv.query.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['query'],
  },]
};

export default ajvInstance.compile(contactFilter_schema);
