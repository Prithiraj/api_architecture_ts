import ajvInstance from '../ajv-instance';
import { elementVersion_ajv } from '../mapper_ajv';


const elementVersion_schema = {
  type: 'object',
  properties: {
    accountId: elementVersion_ajv.accountId.api,
    version: elementVersion_ajv.version.api,
    elementId: elementVersion_ajv.elementId.api,
    name: elementVersion_ajv.name.api,
    data: elementVersion_ajv.data.api,
    createTime: elementVersion_ajv.createTime.api,
    createdBy: elementVersion_ajv.createdBy.api,
    updateRequest: elementVersion_ajv.updateRequest.api,
    updateTime: elementVersion_ajv.updateTime.api,
    createRequest: elementVersion_ajv.createRequest.api,
    id: elementVersion_ajv.id.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(elementVersion_schema);
