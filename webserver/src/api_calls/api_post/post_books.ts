import create_books from '../../schemas/ajv_schemas_create/books';
import { insert_books } from '../../dbmanager/db_insert_sl/books.insert';


export const postbooks = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_books(request.body);
  if (!valid) {
    const { errors } = create_books;
    reject(errors);
  }
  else {
    try {
      const result = insert_books(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
