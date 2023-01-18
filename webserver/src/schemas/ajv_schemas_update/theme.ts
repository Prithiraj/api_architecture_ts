import ajvInstance from '../ajv-instance';
import { theme_ajv } from '../mapper_ajv';


const theme_schema = {
  type: 'object',
  properties: {
    id: theme_ajv.id.api,
    name: theme_ajv.name.api,
    theme: theme_ajv.theme.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
  },{
    required: ['theme'],
  },]
};

export default ajvInstance.compile(theme_schema);
