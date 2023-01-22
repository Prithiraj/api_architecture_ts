import ajvInstance from '../ajv-instance';
import { filterPermission_ajv } from '../mapper_ajv';


const filterPermission_schema = {
  type: 'object',
  properties: {
    ownerAccountId: filterPermission_ajv.ownerAccountId.api,
    sharedAccountId: filterPermission_ajv.sharedAccountId.api,
    contactFilterId: filterPermission_ajv.contactFilterId.api,
  },
  required: ['ownerAccountId', 'contactFilterId', 'sharedAccountId'],
  additionalProperties: false,
};

export default ajvInstance.compile(filterPermission_schema);
