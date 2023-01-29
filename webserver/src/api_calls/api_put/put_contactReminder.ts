import edit_contactReminder from '../../schemas/ajv_schemas_update/contactReminder';
import { update_contactReminder } from '../../dbmanager/db_update_sl/general/contactReminder.update';
import { update_contactReminder_admin } from '../../dbmanager/db_update_sl/admin/contactReminder.update';


export const putcontactReminder = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactReminder(request.body);
  if (!valid) {
    const { errors } = edit_contactReminder;
    reject(errors);
  }
  else {
    try {
      const result = update_contactReminder(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactReminder_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactReminder(request.body);
  if (!valid) {
    const { errors } = edit_contactReminder;
    reject(errors);
  }
  else {
      try {
        const result = update_contactReminder_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
