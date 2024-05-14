import ajvInstance from '../ajv-instance';
import { bookShelves_ajv } from '../mapper_ajv';


const bookShelves_schema = {
  type: 'object',
  properties: {
    shelfId: bookShelves_ajv.shelfId.api,
    bookId: bookShelves_ajv.bookId.api,
    copyNumber: bookShelves_ajv.copyNumber.api,
    shelfLocation: bookShelves_ajv.shelfLocation.api,
  },
  required: ['shelfId'],
  additionalProperties: false,
  anyOf: [{
    required: ['bookId'],
  },{
    required: ['copyNumber'],
  },{
    required: ['shelfLocation'],
  },]
};

export default ajvInstance.compile(bookShelves_schema);
