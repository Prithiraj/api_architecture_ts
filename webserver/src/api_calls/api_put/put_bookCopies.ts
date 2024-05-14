import edit_bookCopies from '../../schemas/ajv_schemas_update/bookCopies';
import { update_bookCopies } from '../../dbmanager/db_update_sl/general/bookCopies.update';
import { update_bookCopies_admin } from '../../dbmanager/db_update_sl/admin/bookCopies.update';


export const putbookCopies = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bookCopies(request.body);
  if (!valid) {
    const { errors } = edit_bookCopies;
    reject(errors);
  }
  else {
    try {
      const result = update_bookCopies(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbookCopies_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bookCopies(request.body);
  if (!valid) {
    const { errors } = edit_bookCopies;
    reject(errors);
  }
  else {
      try {
        const result = update_bookCopies_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
