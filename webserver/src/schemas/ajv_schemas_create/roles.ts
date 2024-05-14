import ajvInstance from '../ajv-instance';
import { roles_ajv } from '../mapper_ajv';


const roles_schema = {
  type: 'object',
  properties: {
    roleName: roles_ajv.roleName.api,
  },
  required: ['roleName'],
  additionalProperties: false,
};

export default ajvInstance.compile(roles_schema);
