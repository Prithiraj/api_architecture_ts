import ajvInstance from '../ajv-instance';
import { authRoles_ajv } from '../mapper_ajv';


const authRoles_schema = {
  type: 'object',
  properties: {
    id: authRoles_ajv.id.api,
    roleName: authRoles_ajv.roleName.api,
    roleDescription: authRoles_ajv.roleDescription.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['roleName'],
  },{
    required: ['roleDescription'],
  },]
};

export default ajvInstance.compile(authRoles_schema);
