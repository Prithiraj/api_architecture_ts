import edit_contactFilter from '../../schemas/ajv_schemas_update/contactFilter';
import { update_contactFilter } from '../../dbmanager/db_update_sl/general/contactFilter.update';
import { update_contactFilter_admin } from '../../dbmanager/db_update_sl/admin/contactFilter.update';


export const putcontactFilter = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactFilter(request.body);
  if (!valid) {
    const { errors } = edit_contactFilter;
    reject(errors);
  }
  else {
    try {
      const result = update_contactFilter(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactFilter_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactFilter(request.body);
  if (!valid) {
    const { errors } = edit_contactFilter;
    reject(errors);
  }
  else {
      try {
        const result = update_contactFilter_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
