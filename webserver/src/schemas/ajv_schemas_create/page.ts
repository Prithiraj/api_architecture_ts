import ajvInstance from '../ajv-instance';
import { page_ajv } from '../mapper_ajv';


const page_schema = {
  type: 'object',
  properties: {
    name: page_ajv.name.api,
    body: page_ajv.body.api,
    templateId: page_ajv.templateId.api,
    path: page_ajv.path.api,
    headerMeta: page_ajv.headerMeta.api,
    themeId: page_ajv.themeId.api,
    category: page_ajv.category.api,
    ownerId: page_ajv.ownerId.api,
    type: page_ajv.type.api,
    status: page_ajv.status.api,
    latestTemplateId: page_ajv.latestTemplateId.api,
    latestVersionId: page_ajv.latestVersionId.api,
  },
  required: ['body', 'themeId', 'type', 'name', 'ownerId', 'latestVersionId'],
  additionalProperties: false,
};

export default ajvInstance.compile(page_schema);
