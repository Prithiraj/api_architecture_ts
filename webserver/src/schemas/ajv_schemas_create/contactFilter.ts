import ajvInstance from '../ajv-instance';
import { contactFilter_ajv } from '../mapper_ajv';


const contactFilter_schema = {
  type: 'object',
  properties: {
    query: contactFilter_ajv.query.api,
  },
  required: ['query'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactFilter_schema);
