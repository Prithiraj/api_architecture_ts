import edit_bridgeContactUser from '../../schemas/ajv_schemas_update/bridgeContactUser';
import { update_bridgeContactUser } from '../../dbmanager/db_update_sl/general/bridgeContactUser.update';
import { update_bridgeContactUser_admin } from '../../dbmanager/db_update_sl/admin/bridgeContactUser.update';


export const putbridgeContactUser = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactUser(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactUser;
    reject(errors);
  }
  else {
    try {
      const result = update_bridgeContactUser(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbridgeContactUser_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactUser(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactUser;
    reject(errors);
  }
  else {
      try {
        const result = update_bridgeContactUser_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
