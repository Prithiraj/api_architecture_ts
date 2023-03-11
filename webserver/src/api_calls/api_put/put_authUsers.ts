import edit_authUsers from '../../schemas/ajv_schemas_update/authUsers';
import { update_authUsers } from '../../dbmanager/db_update_sl/general/authUsers.update';
import { update_authUsers_admin } from '../../dbmanager/db_update_sl/admin/authUsers.update';


export const putauthUsers = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authUsers(request.body);
  if (!valid) {
    const { errors } = edit_authUsers;
    reject(errors);
  }
  else {
    try {
      const result = update_authUsers(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putauthUsers_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authUsers(request.body);
  if (!valid) {
    const { errors } = edit_authUsers;
    reject(errors);
  }
  else {
      try {
        const result = update_authUsers_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
