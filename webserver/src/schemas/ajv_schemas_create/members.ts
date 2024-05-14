import ajvInstance from '../ajv-instance';
import { members_ajv } from '../mapper_ajv';


const members_schema = {
  type: 'object',
  properties: {
    name: members_ajv.name.api,
    email: members_ajv.email.api,
    membershipType: members_ajv.membershipType.api,
    roleId: members_ajv.roleId.api,
    createdOn: members_ajv.createdOn.api,
    updatedOn: members_ajv.updatedOn.api,
  },
  required: ['name', 'createdOn'],
  additionalProperties: false,
};

export default ajvInstance.compile(members_schema);
