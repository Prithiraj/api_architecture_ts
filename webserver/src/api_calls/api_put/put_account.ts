import edit_account from '../../schemas/ajv_schemas_update/account';
import { update_account } from '../../dbmanager/db_update_sl/general/account.update';
import { update_account_admin } from '../../dbmanager/db_update_sl/admin/account.update';


export const putaccount = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_account(request.body);
  if (!valid) {
    const { errors } = edit_account;
    reject(errors);
  }
  else {
    try {
      const result = update_account(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putaccount_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_account(request.body);
  if (!valid) {
    const { errors } = edit_account;
    reject(errors);
  }
  else {
      try {
        const result = update_account_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
