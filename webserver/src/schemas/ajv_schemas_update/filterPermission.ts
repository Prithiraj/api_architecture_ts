import ajvInstance from '../ajv-instance';
import { filterPermission_ajv } from '../mapper_ajv';


const filterPermission_schema = {
  type: 'object',
  properties: {
    id: filterPermission_ajv.id.api,
    sharedAccountId: filterPermission_ajv.sharedAccountId.api,
    contactFilter: filterPermission_ajv.contactFilter.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['sharedAccountId'],
  },{
    required: ['contactFilter'],
  },]
};

export default ajvInstance.compile(filterPermission_schema);
