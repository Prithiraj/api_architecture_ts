import edit_bookShelves from '../../schemas/ajv_schemas_update/bookShelves';
import { update_bookShelves } from '../../dbmanager/db_update_sl/general/bookShelves.update';
import { update_bookShelves_admin } from '../../dbmanager/db_update_sl/admin/bookShelves.update';


export const putbookShelves = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bookShelves(request.body);
  if (!valid) {
    const { errors } = edit_bookShelves;
    reject(errors);
  }
  else {
    try {
      const result = update_bookShelves(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbookShelves_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bookShelves(request.body);
  if (!valid) {
    const { errors } = edit_bookShelves;
    reject(errors);
  }
  else {
      try {
        const result = update_bookShelves_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
