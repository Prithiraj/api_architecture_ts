import ajvInstance from '../ajv-instance';
import { contactStatusLifecycle_ajv } from '../mapper_ajv';


const contactStatusLifecycle_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['lifecycleName'],
    properties: { apicolname: contactStatusLifecycle_ajv.lifecycleName.api},	
  },]
};

export default ajvInstance.compile(contactStatusLifecycle_schema);
