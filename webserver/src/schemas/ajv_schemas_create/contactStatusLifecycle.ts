import ajvInstance from '../ajv-instance';
import { contactStatusLifecycle_ajv } from '../mapper_ajv';


const contactStatusLifecycle_schema = {
  type: 'object',
  properties: {
    lifecycleName: contactStatusLifecycle_ajv.lifecycleName.api,
  },
  required: ['lifecycleName'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactStatusLifecycle_schema);
