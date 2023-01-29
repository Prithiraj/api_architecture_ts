import edit_contactOtherAssociates from '../../schemas/ajv_schemas_update/contactOtherAssociates';
import { update_contactOtherAssociates } from '../../dbmanager/db_update_sl/general/contactOtherAssociates.update';
import { update_contactOtherAssociates_admin } from '../../dbmanager/db_update_sl/admin/contactOtherAssociates.update';


export const putcontactOtherAssociates = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactOtherAssociates(request.body);
  if (!valid) {
    const { errors } = edit_contactOtherAssociates;
    reject(errors);
  }
  else {
    try {
      const result = update_contactOtherAssociates(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactOtherAssociates_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactOtherAssociates(request.body);
  if (!valid) {
    const { errors } = edit_contactOtherAssociates;
    reject(errors);
  }
  else {
      try {
        const result = update_contactOtherAssociates_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
