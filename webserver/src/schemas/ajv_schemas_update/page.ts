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
    themeId: page_ajv.themeId.api,
    category: page_ajv.category.api,
    type: page_ajv.type.api,
    headerMeta: page_ajv.headerMeta.api,
    latestTemplateId: page_ajv.latestTemplateId.api,
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
    required: ['themeId'],
  },{
    required: ['category'],
  },{
    required: ['type'],
  },{
    required: ['headerMeta'],
  },{
    required: ['latestTemplateId'],
  },]
};

export default ajvInstance.compile(page_schema);
