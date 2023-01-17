import ajvInstance from '../ajv-instance';
import { templateVersion_ajv } from '../mapper_ajv';


const templateVersion_schema = {
  type: 'object',
  properties: {
    accountId: templateVersion_ajv.accountId.api,
    version: templateVersion_ajv.version.api,
    type: templateVersion_ajv.type.api,
    name: templateVersion_ajv.name.api,
    data: templateVersion_ajv.data.api,
    createTime: templateVersion_ajv.createTime.api,
    updateRequest: templateVersion_ajv.updateRequest.api,
    updateTime: templateVersion_ajv.updateTime.api,
    updatedBy: templateVersion_ajv.updatedBy.api,
    createRequest: templateVersion_ajv.createRequest.api,
    id: templateVersion_ajv.id.api,
  },
  required: ['version'],
  additionalProperties: false,
};

export default ajvInstance.compile(templateVersion_schema);
