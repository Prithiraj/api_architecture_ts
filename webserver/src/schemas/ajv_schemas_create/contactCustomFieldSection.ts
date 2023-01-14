import ajvInstance from '../ajv-instance';
import { contactCustomFieldSection_ajv } from '../mapper_ajv';


const contactCustomFieldSection_schema = {
  type: 'object',
  properties: {
    id: contactCustomFieldSection_ajv.id.api,
    sectionName: contactCustomFieldSection_ajv.sectionName.api,
    isDeleted: contactCustomFieldSection_ajv.isDeleted.api,
    createdBy: contactCustomFieldSection_ajv.createdBy.api,
    createTime: contactCustomFieldSection_ajv.createTime.api,
    createRequest: contactCustomFieldSection_ajv.createRequest.api,
    updatedBy: contactCustomFieldSection_ajv.updatedBy.api,
    updateTime: contactCustomFieldSection_ajv.updateTime.api,
    updateRequest: contactCustomFieldSection_ajv.updateRequest.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(contactCustomFieldSection_schema);
