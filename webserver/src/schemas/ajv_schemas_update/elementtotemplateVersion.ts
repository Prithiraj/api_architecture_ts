import ajvInstance from '../ajv-instance';
import { elementtotemplateVersion_ajv } from '../mapper_ajv';


const elementtotemplateVersion_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['A'],
    properties: { apicolname: elementtotemplateVersion_ajv.A.api},	
  },{
    required: ['B'],
    properties: { apicolname: elementtotemplateVersion_ajv.B.api},	
  },]
};

export default ajvInstance.compile(elementtotemplateVersion_schema);
