import ajvInstance from '../ajv-instance';
import { bookShelves_ajv } from '../mapper_ajv';


const bookShelves_schema = {
  type: 'object',
  properties: {
    bookId: bookShelves_ajv.bookId.api,
    copyNumber: bookShelves_ajv.copyNumber.api,
    shelfLocation: bookShelves_ajv.shelfLocation.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(bookShelves_schema);
