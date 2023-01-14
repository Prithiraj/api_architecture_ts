import ajvInstance from '../ajv-instance';
import { pageVersion_ajv } from '../mapper_ajv';


const pageVersion_schema = {
  type: 'object',
  properties: {
    accountId: pageVersion_ajv.accountId.api,
    version: pageVersion_ajv.version.api,
    pageId: pageVersion_ajv.pageId.api,
    name: pageVersion_ajv.name.api,
    body: pageVersion_ajv.body.api,
    createTime: pageVersion_ajv.createTime.api,
    createdBy: pageVersion_ajv.createdBy.api,
    updateRequest: pageVersion_ajv.updateRequest.api,
    updateTime: pageVersion_ajv.updateTime.api,
    updatedBy: pageVersion_ajv.updatedBy.api,
    createRequest: pageVersion_ajv.createRequest.api,
    id: pageVersion_ajv.id.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(pageVersion_schema);
