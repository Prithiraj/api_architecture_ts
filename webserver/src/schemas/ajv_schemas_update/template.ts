import ajvInstance from '../ajv-instance';
import { template_ajv } from '../mapper_ajv';


const template_schema = {
  type: 'object',
  properties: {
    id: template_ajv.id.api,
    type: template_ajv.type.api,
    name: template_ajv.name.api,
    data: template_ajv.data.api,
    thumbnail: template_ajv.thumbnail.api,
    latestVersionId: template_ajv.latestVersionId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['type'],
  },{
    required: ['name'],
  },{
    required: ['data'],
  },{
    required: ['thumbnail'],
  },{
    required: ['latestVersionId'],
  },]
};

export default ajvInstance.compile(template_schema);
