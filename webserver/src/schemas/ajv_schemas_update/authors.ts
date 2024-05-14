import ajvInstance from '../ajv-instance';
import { authors_ajv } from '../mapper_ajv';


const authors_schema = {
  type: 'object',
  properties: {
    authorId: authors_ajv.authorId.api,
    firstName: authors_ajv.firstName.api,
    lastName: authors_ajv.lastName.api,
    createdOn: authors_ajv.createdOn.api,
    updatedOn: authors_ajv.updatedOn.api,
  },
  required: ['authorId'],
  additionalProperties: false,
  anyOf: [{
    required: ['firstName'],
  },{
    required: ['lastName'],
  },{
    required: ['createdOn'],
  },{
    required: ['updatedOn'],
  },]
};

export default ajvInstance.compile(authors_schema);
