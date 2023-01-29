import edit_contactPermission from '../../schemas/ajv_schemas_update/contactPermission';
import { update_contactPermission } from '../../dbmanager/db_update_sl/general/contactPermission.update';
import { update_contactPermission_admin } from '../../dbmanager/db_update_sl/admin/contactPermission.update';


export const putcontactPermission = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactPermission(request.body);
  if (!valid) {
    const { errors } = edit_contactPermission;
    reject(errors);
  }
  else {
    try {
      const result = update_contactPermission(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactPermission_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactPermission(request.body);
  if (!valid) {
    const { errors } = edit_contactPermission;
    reject(errors);
  }
  else {
      try {
        const result = update_contactPermission_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
