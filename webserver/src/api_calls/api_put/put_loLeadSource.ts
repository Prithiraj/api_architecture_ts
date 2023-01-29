import edit_loLeadSource from '../../schemas/ajv_schemas_update/loLeadSource';
import { update_loLeadSource } from '../../dbmanager/db_update_sl/general/loLeadSource.update';
import { update_loLeadSource_admin } from '../../dbmanager/db_update_sl/admin/loLeadSource.update';


export const putloLeadSource = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loLeadSource(request.body);
  if (!valid) {
    const { errors } = edit_loLeadSource;
    reject(errors);
  }
  else {
    try {
      const result = update_loLeadSource(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putloLeadSource_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loLeadSource(request.body);
  if (!valid) {
    const { errors } = edit_loLeadSource;
    reject(errors);
  }
  else {
      try {
        const result = update_loLeadSource_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
