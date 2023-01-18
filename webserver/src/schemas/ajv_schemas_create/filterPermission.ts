import ajvInstance from '../ajv-instance';
import { filterPermission_ajv } from '../mapper_ajv';


const filterPermission_schema = {
  type: 'object',
  properties: {
    sharedAccountId: filterPermission_ajv.sharedAccountId.api,
    contactFilter: filterPermission_ajv.contactFilter.api,
    ownerAccountId: filterPermission_ajv.ownerAccountId.api,
  },
  required: ['ownerAccountId', 'sharedAccountId', 'contactFilter'],
  additionalProperties: false,
};

export default ajvInstance.compile(filterPermission_schema);
