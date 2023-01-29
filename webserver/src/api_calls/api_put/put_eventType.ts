import edit_eventType from '../../schemas/ajv_schemas_update/eventType';
import { update_eventType } from '../../dbmanager/db_update_sl/general/eventType.update';
import { update_eventType_admin } from '../../dbmanager/db_update_sl/admin/eventType.update';


export const puteventType = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_eventType(request.body);
  if (!valid) {
    const { errors } = edit_eventType;
    reject(errors);
  }
  else {
    try {
      const result = update_eventType(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const puteventType_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_eventType(request.body);
  if (!valid) {
    const { errors } = edit_eventType;
    reject(errors);
  }
  else {
      try {
        const result = update_eventType_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
