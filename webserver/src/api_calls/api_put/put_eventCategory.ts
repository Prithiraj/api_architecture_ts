import edit_eventCategory from '../../schemas/ajv_schemas_update/eventCategory';
import { update_eventCategory } from '../../dbmanager/db_update_sl/general/eventCategory.update';
import { update_eventCategory_admin } from '../../dbmanager/db_update_sl/admin/eventCategory.update';


export const puteventCategory = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_eventCategory(request.body);
  if (!valid) {
    const { errors } = edit_eventCategory;
    reject(errors);
  }
  else {
    try {
      const result = update_eventCategory(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const puteventCategory_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_eventCategory(request.body);
  if (!valid) {
    const { errors } = edit_eventCategory;
    reject(errors);
  }
  else {
      try {
        const result = update_eventCategory_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
