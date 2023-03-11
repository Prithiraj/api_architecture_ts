import ajvInstance from '../ajv-instance';
import { authRevokedTokens_ajv } from '../mapper_ajv';


const authRevokedTokens_schema = {
  type: 'object',
  properties: {
    id: authRevokedTokens_ajv.id.api,
    jti: authRevokedTokens_ajv.jti.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['jti'],
  },]
};

export default ajvInstance.compile(authRevokedTokens_schema);
