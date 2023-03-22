import ajvInstance from '../ajv-instance';
import { template_ajv } from '../mapper_ajv';


const template_schema = {
  type: 'object',
  properties: {
    type: template_ajv.type.api,
    name: template_ajv.name.api,
    data: template_ajv.data.api,
    thumbnail: template_ajv.thumbnail.api,
    latestVersionId: template_ajv.latestVersionId.api,
  },
  required: ['name', 'latestVersionId', 'data', 'thumbnail', 'type'],
  additionalProperties: false,
};

export default ajvInstance.compile(template_schema);
