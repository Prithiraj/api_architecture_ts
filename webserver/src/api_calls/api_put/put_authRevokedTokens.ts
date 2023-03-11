import edit_authRevokedTokens from '../../schemas/ajv_schemas_update/authRevokedTokens';
import { update_authRevokedTokens } from '../../dbmanager/db_update_sl/general/authRevokedTokens.update';
import { update_authRevokedTokens_admin } from '../../dbmanager/db_update_sl/admin/authRevokedTokens.update';


export const putauthRevokedTokens = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authRevokedTokens(request.body);
  if (!valid) {
    const { errors } = edit_authRevokedTokens;
    reject(errors);
  }
  else {
    try {
      const result = update_authRevokedTokens(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putauthRevokedTokens_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_authRevokedTokens(request.body);
  if (!valid) {
    const { errors } = edit_authRevokedTokens;
    reject(errors);
  }
  else {
      try {
        const result = update_authRevokedTokens_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
