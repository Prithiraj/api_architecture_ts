import ajvInstance from '../ajv-instance';
import { theme_ajv } from '../mapper_ajv';


const theme_schema = {
  type: 'object',
  properties: {
    name: theme_ajv.name.api,
    theme: theme_ajv.theme.api,
  },
  required: ['theme'],
  additionalProperties: false,
};

export default ajvInstance.compile(theme_schema);
