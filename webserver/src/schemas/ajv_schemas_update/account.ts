import ajvInstance from '../ajv-instance';
import { account_ajv } from '../mapper_ajv';


const account_schema = {
  type: 'object',
  properties: {
    id: account_ajv.id.api,
    subdomain: account_ajv.subdomain.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['subdomain'],
  },]
};

export default ajvInstance.compile(account_schema);
