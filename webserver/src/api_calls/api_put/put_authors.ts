import edit_authors from '../../schemas/ajv_schemas_update/authors';
import { update_authors } from '../../dbmanager/db_update_sl/general/authors.update';
import { update_authors_admin } from '../../dbmanager/db_update_sl/admin/authors.update';


export const putauthors = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authors(request.body);
  if (!valid) {
    const { errors } = edit_authors;
    reject(errors);
  }
  else {
    try {
      const result = update_authors(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putauthors_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authors(request.body);
  if (!valid) {
    const { errors } = edit_authors;
    reject(errors);
  }
  else {
      try {
        const result = update_authors_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
