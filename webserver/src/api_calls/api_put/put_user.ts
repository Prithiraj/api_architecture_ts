import edit_user from '../../schemas/ajv_schemas_update/user';
import { update_user } from '../../dbmanager/db_update_sl/general/user.update';
import { update_user_admin } from '../../dbmanager/db_update_sl/admin/user.update';


export const putuser = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_user(request.body);
  if (!valid) {
    const { errors } = edit_user;
    reject(errors);
  }
  else {
    try {
      const result = update_user(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putuser_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_user(request.body);
  if (!valid) {
    const { errors } = edit_user;
    reject(errors);
  }
  else {
      try {
        const result = update_user_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
