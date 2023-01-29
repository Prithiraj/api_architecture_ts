import ajvInstance from '../ajv-instance';
import { account_ajv } from '../mapper_ajv';


const account_schema = {
  type: 'object',
  properties: {
    id: account_ajv.id.api,
    subdomain: account_ajv.subdomain.api,
    parentAccountId: account_ajv.parentAccountId.api,
    masterUserId: account_ajv.masterUserId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['subdomain'],
  },{
    required: ['parentAccountId'],
  },{
    required: ['masterUserId'],
  },]
};

export default ajvInstance.compile(account_schema);
