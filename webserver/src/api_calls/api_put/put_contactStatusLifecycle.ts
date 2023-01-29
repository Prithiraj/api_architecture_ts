import edit_contactStatusLifecycle from '../../schemas/ajv_schemas_update/contactStatusLifecycle';
import { update_contactStatusLifecycle } from '../../dbmanager/db_update_sl/general/contactStatusLifecycle.update';
import { update_contactStatusLifecycle_admin } from '../../dbmanager/db_update_sl/admin/contactStatusLifecycle.update';


export const putcontactStatusLifecycle = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactStatusLifecycle(request.body);
  if (!valid) {
    const { errors } = edit_contactStatusLifecycle;
    reject(errors);
  }
  else {
    try {
      const result = update_contactStatusLifecycle(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactStatusLifecycle_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactStatusLifecycle(request.body);
  if (!valid) {
    const { errors } = edit_contactStatusLifecycle;
    reject(errors);
  }
  else {
      try {
        const result = update_contactStatusLifecycle_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
