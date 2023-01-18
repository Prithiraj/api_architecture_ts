import ajvInstance from '../ajv-instance';
import { contactStatusLifecycle_ajv } from '../mapper_ajv';


const contactStatusLifecycle_schema = {
  type: 'object',
  properties: {
    id: contactStatusLifecycle_ajv.id.api,
    lifecycleName: contactStatusLifecycle_ajv.lifecycleName.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['lifecycleName'],
  },]
};

export default ajvInstance.compile(contactStatusLifecycle_schema);
