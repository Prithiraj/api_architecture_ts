import ajvInstance from '../ajv-instance';
import { template_ajv } from '../mapper_ajv';


const template_schema = {
  type: 'object',
  properties: {
    accountId: template_ajv.accountId.api,
    id: template_ajv.id.api,
    type: template_ajv.type.api,
    name: template_ajv.name.api,
    data: template_ajv.data.api,
    createTime: template_ajv.createTime.api,
    thumbnail: template_ajv.thumbnail.api,
    createdBy: template_ajv.createdBy.api,
    updateRequest: template_ajv.updateRequest.api,
    updateTime: template_ajv.updateTime.api,
    updatedBy: template_ajv.updatedBy.api,
    createRequest: template_ajv.createRequest.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(template_schema);
