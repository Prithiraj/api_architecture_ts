import ajvInstance from '../ajv-instance';
import { authRevokedTokens_ajv } from '../mapper_ajv';


const authRevokedTokens_schema = {
  type: 'object',
  properties: {
    jti: authRevokedTokens_ajv.jti.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(authRevokedTokens_schema);
