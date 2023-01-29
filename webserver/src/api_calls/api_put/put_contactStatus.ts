import edit_contactStatus from '../../schemas/ajv_schemas_update/contactStatus';
import { update_contactStatus } from '../../dbmanager/db_update_sl/general/contactStatus.update';
import { update_contactStatus_admin } from '../../dbmanager/db_update_sl/admin/contactStatus.update';


export const putcontactStatus = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactStatus(request.body);
  if (!valid) {
    const { errors } = edit_contactStatus;
    reject(errors);
  }
  else {
    try {
      const result = update_contactStatus(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactStatus_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactStatus(request.body);
  if (!valid) {
    const { errors } = edit_contactStatus;
    reject(errors);
  }
  else {
      try {
        const result = update_contactStatus_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
