import edit_authRoles from '../../schemas/ajv_schemas_update/authRoles';
import { update_authRoles } from '../../dbmanager/db_update_sl/general/authRoles.update';
import { update_authRoles_admin } from '../../dbmanager/db_update_sl/admin/authRoles.update';


export const putauthRoles = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authRoles(request.body);
  if (!valid) {
    const { errors } = edit_authRoles;
    reject(errors);
  }
  else {
    try {
      const result = update_authRoles(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putauthRoles_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authRoles(request.body);
  if (!valid) {
    const { errors } = edit_authRoles;
    reject(errors);
  }
  else {
      try {
        const result = update_authRoles_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
