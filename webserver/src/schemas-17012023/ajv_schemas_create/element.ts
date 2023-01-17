import ajvInstance from '../ajv-instance';
import { element_ajv } from '../mapper_ajv';


const element_schema = {
  type: 'object',
  properties: {
    accountId: element_ajv.accountId.api,
    templateId: element_ajv.templateId.api,
    id: element_ajv.id.api,
    name: element_ajv.name.api,
    data: element_ajv.data.api,
    createTime: element_ajv.createTime.api,
    type: element_ajv.type.api,
    updateRequest: element_ajv.updateRequest.api,
    updatedBy: element_ajv.updatedBy.api,
    createRequest: element_ajv.createRequest.api,
  },
  required: ['name', 'data', 'type'],
  additionalProperties: false,
};

export default ajvInstance.compile(element_schema);
