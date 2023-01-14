import ajvInstance from '../ajv-instance';
import { element_ajv } from '../mapper_ajv';


const element_schema = {
  type: 'object',
  properties: {
    accountId: element_ajv.accountId.api,
    templateId: element_ajv.templateId.api,
    id: element_ajv.id.api,
    createTime: element_ajv.createTime.api,
    createdBy: element_ajv.createdBy.api,
    updateTime: element_ajv.updateTime.api,
    createRequest: element_ajv.createRequest.api,
    data: element_ajv.data.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(element_schema);
