import ajvInstance from '../ajv-instance';
import { contactCustomField_ajv } from '../mapper_ajv';


const contactCustomField_schema = {
  type: 'object',
  properties: {
    id: contactCustomField_ajv.id.api,
    accountId: contactCustomField_ajv.accountId.api,
    name: contactCustomField_ajv.name.api,
    internalName: contactCustomField_ajv.internalName.api,
    type: contactCustomField_ajv.type.api,
    order: contactCustomField_ajv.order.api,
    purpose: contactCustomField_ajv.purpose.api,
    createdBy: contactCustomField_ajv.createdBy.api,
    createTime: contactCustomField_ajv.createTime.api,
    createRequest: contactCustomField_ajv.createRequest.api,
    updatedBy: contactCustomField_ajv.updatedBy.api,
    updateTime: contactCustomField_ajv.updateTime.api,
    updateRequest: contactCustomField_ajv.updateRequest.api,
    sectionId: contactCustomField_ajv.sectionId.api,
    isDeleted: contactCustomField_ajv.isDeleted.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(contactCustomField_schema);
