import ajvInstance from '../ajv-instance';
import { templateDependency_ajv } from '../mapper_ajv';


const templateDependency_schema = {
  type: 'object',
  properties: {
    id: templateDependency_ajv.id.api,
    accountId: templateDependency_ajv.accountId.api,
    templateId: templateDependency_ajv.templateId.api,
    createTime: templateDependency_ajv.createTime.api,
    updateRequest: templateDependency_ajv.updateRequest.api,
    updateTime: templateDependency_ajv.updateTime.api,
    updatedBy: templateDependency_ajv.updatedBy.api,
    createRequest: templateDependency_ajv.createRequest.api,
    versionId: templateDependency_ajv.versionId.api,
  },
  required: ['templateId', 'versionId'],
  additionalProperties: false,
};

export default ajvInstance.compile(templateDependency_schema);
