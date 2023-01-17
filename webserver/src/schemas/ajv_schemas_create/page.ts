import ajvInstance from '../ajv-instance';
import { page_ajv } from '../mapper_ajv';


const page_schema = {
  type: 'object',
  properties: {
    name: page_ajv.name.api,
    body: page_ajv.body.api,
    templateId: page_ajv.templateId.api,
    path: page_ajv.path.api,
    themeId: page_ajv.themeId.api,
    category: page_ajv.category.api,
    type: page_ajv.type.api,
    status: page_ajv.status.api,
    ownerId: page_ajv.ownerId.api,
    headerMeta: page_ajv.headerMeta.api,
  },
  required: ['ownerId', 'themeId', 'type', 'name', 'body'],
  additionalProperties: false,
};

export default ajvInstance.compile(page_schema);
