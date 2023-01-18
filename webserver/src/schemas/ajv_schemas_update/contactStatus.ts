import ajvInstance from '../ajv-instance';
import { contactStatus_ajv } from '../mapper_ajv';


const contactStatus_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
    properties: { apicolname: contactStatus_ajv.name.api},	
  },{
    required: ['order'],
    properties: { apicolname: contactStatus_ajv.order.api},	
  },{
    required: ['isConverted'],
    properties: { apicolname: contactStatus_ajv.isConverted.api},	
  },{
    required: ['statusLifecycleId'],
    properties: { apicolname: contactStatus_ajv.statusLifecycleId.api},	
  },]
};

export default ajvInstance.compile(contactStatus_schema);
