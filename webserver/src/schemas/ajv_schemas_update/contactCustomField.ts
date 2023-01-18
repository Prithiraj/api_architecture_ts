import ajvInstance from '../ajv-instance';
import { contactCustomField_ajv } from '../mapper_ajv';


const contactCustomField_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
    properties: { apicolname: contactCustomField_ajv.name.api},	
  },{
    required: ['type'],
    properties: { apicolname: contactCustomField_ajv.type.api},	
  },{
    required: ['order'],
    properties: { apicolname: contactCustomField_ajv.order.api},	
  },{
    required: ['purpose'],
    properties: { apicolname: contactCustomField_ajv.purpose.api},	
  },{
    required: ['sectionId'],
    properties: { apicolname: contactCustomField_ajv.sectionId.api},	
  },]
};

export default ajvInstance.compile(contactCustomField_schema);
