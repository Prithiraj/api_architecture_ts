import ajvInstance from '../ajv-instance';
import { authors_ajv } from '../mapper_ajv';


const authors_schema = {
  type: 'object',
  properties: {
    firstName: authors_ajv.firstName.api,
    lastName: authors_ajv.lastName.api,
    createdOn: authors_ajv.createdOn.api,
    updatedOn: authors_ajv.updatedOn.api,
  },
  required: ['createdOn', 'firstName', 'lastName'],
  additionalProperties: false,
};

export default ajvInstance.compile(authors_schema);
