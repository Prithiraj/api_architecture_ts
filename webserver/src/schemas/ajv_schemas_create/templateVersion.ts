import ajvInstance from '../ajv-instance';
import { templateVersion_ajv } from '../mapper_ajv';


const templateVersion_schema = {
  type: 'object',
  properties: {
    version: templateVersion_ajv.version.api,
    type: templateVersion_ajv.type.api,
    name: templateVersion_ajv.name.api,
    data: templateVersion_ajv.data.api,
  },
  required: ['version'],
  additionalProperties: false,
};

export default ajvInstance.compile(templateVersion_schema);
