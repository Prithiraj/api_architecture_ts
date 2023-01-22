import ajvInstance from '../ajv-instance';
import { filterPermission_ajv } from '../mapper_ajv';


const filterPermission_schema = {
  type: 'object',
  properties: {
    id: filterPermission_ajv.id.api,
    ownerAccountId: filterPermission_ajv.ownerAccountId.api,
    sharedAccountId: filterPermission_ajv.sharedAccountId.api,
    contactFilterId: filterPermission_ajv.contactFilterId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['ownerAccountId'],
  },{
    required: ['sharedAccountId'],
  },{
    required: ['contactFilterId'],
  },]
};

export default ajvInstance.compile(filterPermission_schema);
