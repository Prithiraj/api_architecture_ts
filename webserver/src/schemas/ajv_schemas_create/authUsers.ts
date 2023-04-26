import ajvInstance from '../ajv-instance';
import { authUsers_ajv } from '../mapper_ajv';


const authUsers_schema = {
  type: 'object',
  properties: {
    username: authUsers_ajv.username.api,
    name: authUsers_ajv.name.api,
    password: authUsers_ajv.password.api,
    createdOn: authUsers_ajv.createdOn.api,
    modifiedOn: authUsers_ajv.modifiedOn.api,
    lastSignedOn: authUsers_ajv.lastSignedOn.api,
    isActive: authUsers_ajv.isActive.api,
    isAdmin: authUsers_ajv.isAdmin.api,
  },
  required: ['name', 'isAdmin', 'createdOn', 'isActive', 'username'],
  additionalProperties: false,
};

export default ajvInstance.compile(authUsers_schema);
