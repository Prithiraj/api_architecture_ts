import create_activityLog from '../../schemas/ajv_schemas_create/activityLog';
import { insert_activityLog } from '../../dbmanager/db_insert_sl/activityLog.insert';


export const postactivityLog = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_activityLog(request.body);
  if (!valid) {
    const { errors } = create_activityLog;
    reject(errors);
  }
  else {
    try {
      const result = insert_activityLog(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
