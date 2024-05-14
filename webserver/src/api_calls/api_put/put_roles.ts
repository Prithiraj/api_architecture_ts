import edit_roles from '../../schemas/ajv_schemas_update/roles';
import { update_roles } from '../../dbmanager/db_update_sl/general/roles.update';
import { update_roles_admin } from '../../dbmanager/db_update_sl/admin/roles.update';


export const putroles = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_roles(request.body);
  if (!valid) {
    const { errors } = edit_roles;
    reject(errors);
  }
  else {
    try {
      const result = update_roles(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putroles_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_roles(request.body);
  if (!valid) {
    const { errors } = edit_roles;
    reject(errors);
  }
  else {
      try {
        const result = update_roles_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
