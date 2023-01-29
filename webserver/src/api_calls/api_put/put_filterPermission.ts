import edit_filterPermission from '../../schemas/ajv_schemas_update/filterPermission';
import { update_filterPermission } from '../../dbmanager/db_update_sl/general/filterPermission.update';
import { update_filterPermission_admin } from '../../dbmanager/db_update_sl/admin/filterPermission.update';


export const putfilterPermission = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_filterPermission(request.body);
  if (!valid) {
    const { errors } = edit_filterPermission;
    reject(errors);
  }
  else {
    try {
      const result = update_filterPermission(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putfilterPermission_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_filterPermission(request.body);
  if (!valid) {
    const { errors } = edit_filterPermission;
    reject(errors);
  }
  else {
      try {
        const result = update_filterPermission_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
