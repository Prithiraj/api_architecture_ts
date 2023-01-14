import ajvInstance from '../ajv-instance';
import { contactTag_ajv } from '../mapper_ajv';


const contactTag_schema = {
  type: 'object',
  properties: {
    id: contactTag_ajv.id.api,
    accountId: contactTag_ajv.accountId.api,
    name: contactTag_ajv.name.api,
    order: contactTag_ajv.order.api,
    createdBy: contactTag_ajv.createdBy.api,
    createTime: contactTag_ajv.createTime.api,
    createRequest: contactTag_ajv.createRequest.api,
    updatedBy: contactTag_ajv.updatedBy.api,
    updateTime: contactTag_ajv.updateTime.api,
    updateRequest: contactTag_ajv.updateRequest.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(contactTag_schema);
