import edit_loLeadRaw from '../../schemas/ajv_schemas_update/loLeadRaw';
import { update_loLeadRaw } from '../../dbmanager/db_update_sl/general/loLeadRaw.update';
import { update_loLeadRaw_admin } from '../../dbmanager/db_update_sl/admin/loLeadRaw.update';


export const putloLeadRaw = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loLeadRaw(request.body);
  if (!valid) {
    const { errors } = edit_loLeadRaw;
    reject(errors);
  }
  else {
    try {
      const result = update_loLeadRaw(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putloLeadRaw_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loLeadRaw(request.body);
  if (!valid) {
    const { errors } = edit_loLeadRaw;
    reject(errors);
  }
  else {
      try {
        const result = update_loLeadRaw_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
