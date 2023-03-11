import ajvInstance from '../ajv-instance';
import { authUserRoles_ajv } from '../mapper_ajv';


const authUserRoles_schema = {
  type: 'object',
  properties: {
    id: authUserRoles_ajv.id.api,
    roleId: authUserRoles_ajv.roleId.api,
    userId: authUserRoles_ajv.userId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['roleId'],
  },{
    required: ['userId'],
  },]
};

export default ajvInstance.compile(authUserRoles_schema);
