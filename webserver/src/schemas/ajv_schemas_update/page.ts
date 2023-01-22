import ajvInstance from '../ajv-instance';
import { page_ajv } from '../mapper_ajv';


const page_schema = {
  type: 'object',
  properties: {
    id: page_ajv.id.api,
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
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['name'],
  },{
    required: ['body'],
  },{
    required: ['templateId'],
  },{
    required: ['path'],
  },{
    required: ['headerMeta'],
  },{
    required: ['themeId'],
  },{
    required: ['category'],
  },{
    required: ['ownerId'],
  },{
    required: ['type'],
  },{
    required: ['status'],
  },{
    required: ['latestTemplateId'],
  },{
    required: ['latestVersionId'],
  },]
};

export default ajvInstance.compile(page_schema);
