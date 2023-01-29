import edit_loSubscription from '../../schemas/ajv_schemas_update/loSubscription';
import { update_loSubscription } from '../../dbmanager/db_update_sl/general/loSubscription.update';
import { update_loSubscription_admin } from '../../dbmanager/db_update_sl/admin/loSubscription.update';


export const putloSubscription = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loSubscription(request.body);
  if (!valid) {
    const { errors } = edit_loSubscription;
    reject(errors);
  }
  else {
    try {
      const result = update_loSubscription(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putloSubscription_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loSubscription(request.body);
  if (!valid) {
    const { errors } = edit_loSubscription;
    reject(errors);
  }
  else {
      try {
        const result = update_loSubscription_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
