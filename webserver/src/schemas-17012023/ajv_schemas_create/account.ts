import ajvInstance from '../ajv-instance';
import { account_ajv } from '../mapper_ajv';


const account_schema = {
  type: 'object',
  properties: {
    id: account_ajv.id.api,
    createTime: account_ajv.createTime.api,
    createRequest: account_ajv.createRequest.api,
    updatedBy: account_ajv.updatedBy.api,
    updateTime: account_ajv.updateTime.api,
    updateRequest: account_ajv.updateRequest.api,
  },
  required: ,
  additionalProperties: false,
};

export default ajvInstance.compile(account_schema);
