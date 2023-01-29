import edit_loLead from '../../schemas/ajv_schemas_update/loLead';
import { update_loLead } from '../../dbmanager/db_update_sl/general/loLead.update';
import { update_loLead_admin } from '../../dbmanager/db_update_sl/admin/loLead.update';


export const putloLead = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loLead(request.body);
  if (!valid) {
    const { errors } = edit_loLead;
    reject(errors);
  }
  else {
    try {
      const result = update_loLead(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putloLead_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loLead(request.body);
  if (!valid) {
    const { errors } = edit_loLead;
    reject(errors);
  }
  else {
      try {
        const result = update_loLead_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
