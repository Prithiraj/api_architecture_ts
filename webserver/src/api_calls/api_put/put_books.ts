import edit_books from '../../schemas/ajv_schemas_update/books';
import { update_books } from '../../dbmanager/db_update_sl/general/books.update';
import { update_books_admin } from '../../dbmanager/db_update_sl/admin/books.update';


export const putbooks = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_books(request.body);
  if (!valid) {
    const { errors } = edit_books;
    reject(errors);
  }
  else {
    try {
      const result = update_books(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbooks_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_books(request.body);
  if (!valid) {
    const { errors } = edit_books;
    reject(errors);
  }
  else {
      try {
        const result = update_books_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
