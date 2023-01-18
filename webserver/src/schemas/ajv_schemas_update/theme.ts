import ajvInstance from '../ajv-instance';
import { theme_ajv } from '../mapper_ajv';


const theme_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
    properties: { apicolname: theme_ajv.name.api},	
  },{
    required: ['theme'],
    properties: { apicolname: theme_ajv.theme.api},	
  },]
};

export default ajvInstance.compile(theme_schema);
