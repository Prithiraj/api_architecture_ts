import edit_members from '../../schemas/ajv_schemas_update/members';
import { update_members } from '../../dbmanager/db_update_sl/general/members.update';
import { update_members_admin } from '../../dbmanager/db_update_sl/admin/members.update';


export const putmembers = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_members(request.body);
  if (!valid) {
    const { errors } = edit_members;
    reject(errors);
  }
  else {
    try {
      const result = update_members(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putmembers_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_members(request.body);
  if (!valid) {
    const { errors } = edit_members;
    reject(errors);
  }
  else {
      try {
        const result = update_members_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
