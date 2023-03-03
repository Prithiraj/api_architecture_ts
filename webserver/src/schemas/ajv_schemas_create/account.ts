import ajvInstance from '../ajv-instance';
import { account_ajv } from '../mapper_ajv';


const account_schema = {
  type: 'object',
  properties: {
    subdomain: account_ajv.subdomain.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(account_schema);
