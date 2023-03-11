import ajvInstance from '../ajv-instance';
import { authUserRoles_ajv } from '../mapper_ajv';


const authUserRoles_schema = {
  type: 'object',
  properties: {
    roleId: authUserRoles_ajv.roleId.api,
    userId: authUserRoles_ajv.userId.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(authUserRoles_schema);
