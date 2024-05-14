import ajvInstance from '../ajv-instance';
import { books_ajv } from '../mapper_ajv';


const books_schema = {
  type: 'object',
  properties: {
    title: books_ajv.title.api,
    authorId: books_ajv.authorId.api,
    isbn: books_ajv.isbn.api,
    publicationDate: books_ajv.publicationDate.api,
    genre: books_ajv.genre.api,
    createdOn: books_ajv.createdOn.api,
    updatedOn: books_ajv.updatedOn.api,
  },
  required: ['createdOn', 'title'],
  additionalProperties: false,
};

export default ajvInstance.compile(books_schema);
