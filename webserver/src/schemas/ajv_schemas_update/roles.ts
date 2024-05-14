import ajvInstance from '../ajv-instance';
import { roles_ajv } from '../mapper_ajv';


const roles_schema = {
  type: 'object',
  properties: {
    roleId: roles_ajv.roleId.api,
    roleName: roles_ajv.roleName.api,
  },
  required: ['roleId'],
  additionalProperties: false,
  anyOf: [{
    required: ['roleName'],
  },]
};

export default ajvInstance.compile(roles_schema);
