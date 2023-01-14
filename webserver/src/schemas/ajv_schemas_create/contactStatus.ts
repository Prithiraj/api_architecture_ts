import ajvInstance from '../ajv-instance';
import { contactStatus_ajv } from '../mapper_ajv';


const contactStatus_schema = {
  type: 'object',
  properties: {
    id: contactStatus_ajv.id.api,
    accountId: contactStatus_ajv.accountId.api,
    name: contactStatus_ajv.name.api,
    order: contactStatus_ajv.order.api,
    createdBy: contactStatus_ajv.createdBy.api,
    createTime: contactStatus_ajv.createTime.api,
    createRequest: contactStatus_ajv.createRequest.api,
    updatedBy: contactStatus_ajv.updatedBy.api,
    updateTime: contactStatus_ajv.updateTime.api,
    updateRequest: contactStatus_ajv.updateRequest.api,
    isConverted: contactStatus_ajv.isConverted.api,
    statusLifecycleId: contactStatus_ajv.statusLifecycleId.api,
    isDeleted: contactStatus_ajv.isDeleted.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(contactStatus_schema);
