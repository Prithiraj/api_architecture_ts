import ajvInstance from '../ajv-instance';
import { contactStatusLifecycle_ajv } from '../mapper_ajv';


const contactStatusLifecycle_schema = {
  type: 'object',
  properties: {
    id: contactStatusLifecycle_ajv.id.api,
    lifecycleName: contactStatusLifecycle_ajv.lifecycleName.api,
    createTime: contactStatusLifecycle_ajv.createTime.api,
    createRequest: contactStatusLifecycle_ajv.createRequest.api,
    updatedBy: contactStatusLifecycle_ajv.updatedBy.api,
    updateTime: contactStatusLifecycle_ajv.updateTime.api,
    updateRequest: contactStatusLifecycle_ajv.updateRequest.api,
    isDeleted: contactStatusLifecycle_ajv.isDeleted.api,
  },
  required: ['lifecycleName'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactStatusLifecycle_schema);
