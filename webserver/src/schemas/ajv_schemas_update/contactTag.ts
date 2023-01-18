import ajvInstance from '../ajv-instance';
import { contactTag_ajv } from '../mapper_ajv';


const contactTag_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
    properties: { apicolname: contactTag_ajv.name.api},	
  },{
    required: ['order'],
    properties: { apicolname: contactTag_ajv.order.api},	
  },]
};

export default ajvInstance.compile(contactTag_schema);
