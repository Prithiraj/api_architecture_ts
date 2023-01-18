import ajvInstance from '../ajv-instance';
import { contactStatus_ajv } from '../mapper_ajv';


const contactStatus_schema = {
  type: 'object',
  properties: {
    name: contactStatus_ajv.name.api,
    order: contactStatus_ajv.order.api,
    isConverted: contactStatus_ajv.isConverted.api,
    statusLifecycleId: contactStatus_ajv.statusLifecycleId.api,
  },
  required: ['isConverted', 'name', 'order'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactStatus_schema);
