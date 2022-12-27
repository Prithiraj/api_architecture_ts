import ajvInstance from '../ajv-instance';
import { element_ajv } from '../mapper_ajv';


const element_schema = {
  type: 'object',
  properties: {
    accountId: element_ajv.accountId.api,
    templateId: element_ajv.templateId.api,
    latestTemplate: element_ajv.latestTemplate.api,
    id: element_ajv.id.api,
    name: element_ajv.name.api,
    data: element_ajv.data.api,
    createTime: element_ajv.createTime.api,
    type: element_ajv.type.api,
    createdBy: element_ajv.createdBy.api,
    updateRequest: element_ajv.updateRequest.api,
    updateTime: element_ajv.updateTime.api,
    updatedBy: element_ajv.updatedBy.api,
    createRequest: element_ajv.createRequest.api,
    latestVersionId: element_ajv.latestVersionId.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(element_schema);
