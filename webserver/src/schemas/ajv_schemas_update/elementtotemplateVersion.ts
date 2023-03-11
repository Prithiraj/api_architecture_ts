import ajvInstance from '../ajv-instance';
import { elementtotemplateVersion_ajv } from '../mapper_ajv';


const elementtotemplateVersion_schema = {
  type: 'object',
  properties: {
    A: elementtotemplateVersion_ajv.A.api,
    B: elementtotemplateVersion_ajv.B.api,
  },
  required: [],
  additionalProperties: false,
  anyOf: [{
    required: ['A'],
  },{
    required: ['B'],
  },]
};

export default ajvInstance.compile(elementtotemplateVersion_schema);
