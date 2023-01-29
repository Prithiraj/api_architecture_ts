import edit_activityLog from '../../schemas/ajv_schemas_update/activityLog';
import { update_activityLog } from '../../dbmanager/db_update_sl/general/activityLog.update';
import { update_activityLog_admin } from '../../dbmanager/db_update_sl/admin/activityLog.update';


export const putactivityLog = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_activityLog(request.body);
  if (!valid) {
    const { errors } = edit_activityLog;
    reject(errors);
  }
  else {
    try {
      const result = update_activityLog(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putactivityLog_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_activityLog(request.body);
  if (!valid) {
    const { errors } = edit_activityLog;
    reject(errors);
  }
  else {
      try {
        const result = update_activityLog_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
