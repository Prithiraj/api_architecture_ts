import edit_authUserRoles from '../../schemas/ajv_schemas_update/authUserRoles';
import { update_authUserRoles } from '../../dbmanager/db_update_sl/general/authUserRoles.update';
import { update_authUserRoles_admin } from '../../dbmanager/db_update_sl/admin/authUserRoles.update';


export const putauthUserRoles = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authUserRoles(request.body);
  if (!valid) {
    const { errors } = edit_authUserRoles;
    reject(errors);
  }
  else {
    try {
      const result = update_authUserRoles(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putauthUserRoles_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authUserRoles(request.body);
  if (!valid) {
    const { errors } = edit_authUserRoles;
    reject(errors);
  }
  else {
      try {
        const result = update_authUserRoles_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
