import edit_loSubscriptionDailyStats from '../../schemas/ajv_schemas_update/loSubscriptionDailyStats';
import { update_loSubscriptionDailyStats } from '../../dbmanager/db_update_sl/general/loSubscriptionDailyStats.update';
import { update_loSubscriptionDailyStats_admin } from '../../dbmanager/db_update_sl/admin/loSubscriptionDailyStats.update';


export const putloSubscriptionDailyStats = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loSubscriptionDailyStats(request.body);
  if (!valid) {
    const { errors } = edit_loSubscriptionDailyStats;
    reject(errors);
  }
  else {
    try {
      const result = update_loSubscriptionDailyStats(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putloSubscriptionDailyStats_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loSubscriptionDailyStats(request.body);
  if (!valid) {
    const { errors } = edit_loSubscriptionDailyStats;
    reject(errors);
  }
  else {
      try {
        const result = update_loSubscriptionDailyStats_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
