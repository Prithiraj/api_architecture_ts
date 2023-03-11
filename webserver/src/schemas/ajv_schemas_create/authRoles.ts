import ajvInstance from '../ajv-instance';
import { authRoles_ajv } from '../mapper_ajv';


const authRoles_schema = {
  type: 'object',
  properties: {
    roleName: authRoles_ajv.roleName.api,
    roleDescription: authRoles_ajv.roleDescription.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(authRoles_schema);
