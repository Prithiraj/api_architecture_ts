import edit_eventsV2 from '../../schemas/ajv_schemas_update/eventsV2';
import { update_eventsV2 } from '../../dbmanager/db_update_sl/general/eventsV2.update';
import { update_eventsV2_admin } from '../../dbmanager/db_update_sl/admin/eventsV2.update';


export const puteventsV2 = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_eventsV2(request.body);
  if (!valid) {
    const { errors } = edit_eventsV2;
    reject(errors);
  }
  else {
    try {
      const result = update_eventsV2(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const puteventsV2_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_eventsV2(request.body);
  if (!valid) {
    const { errors } = edit_eventsV2;
    reject(errors);
  }
  else {
      try {
        const result = update_eventsV2_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
