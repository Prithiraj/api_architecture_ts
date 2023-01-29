import edit_events from '../../schemas/ajv_schemas_update/events';
import { update_events } from '../../dbmanager/db_update_sl/general/events.update';
import { update_events_admin } from '../../dbmanager/db_update_sl/admin/events.update';


export const putevents = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_events(request.body);
  if (!valid) {
    const { errors } = edit_events;
    reject(errors);
  }
  else {
    try {
      const result = update_events(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putevents_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_events(request.body);
  if (!valid) {
    const { errors } = edit_events;
    reject(errors);
  }
  else {
      try {
        const result = update_events_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
