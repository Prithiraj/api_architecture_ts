import ajvInstance from '../ajv-instance';
import { bookCopies_ajv } from '../mapper_ajv';


const bookCopies_schema = {
  type: 'object',
  properties: {
    bookId: bookCopies_ajv.bookId.api,
    copyNumber: bookCopies_ajv.copyNumber.api,
    status: bookCopies_ajv.status.api,
  },
  required: ['bookId', 'copyNumber'],
  additionalProperties: false,
  anyOf: [{
    required: ['status'],
  },]
};

export default ajvInstance.compile(bookCopies_schema);
