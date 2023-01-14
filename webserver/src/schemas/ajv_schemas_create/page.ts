import ajvInstance from '../ajv-instance';
import { page_ajv } from '../mapper_ajv';


const page_schema = {
  type: 'object',
  properties: {
    accountId: page_ajv.accountId.api,
    id: page_ajv.id.api,
    name: page_ajv.name.api,
    body: page_ajv.body.api,
    templateId: page_ajv.templateId.api,
    path: page_ajv.path.api,
    createTime: page_ajv.createTime.api,
    themeId: page_ajv.themeId.api,
    createdBy: page_ajv.createdBy.api,
    updateRequest: page_ajv.updateRequest.api,
    updatedBy: page_ajv.updatedBy.api,
    category: page_ajv.category.api,
    ownerId: page_ajv.ownerId.api,
    status: page_ajv.status.api,
    latestTemplateId: page_ajv.latestTemplateId.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(page_schema);
