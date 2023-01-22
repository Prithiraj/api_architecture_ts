import create_loSubscriptionDailyStats from '../../schemas/ajv_schemas_create/loSubscriptionDailyStats';
import { insert_loSubscriptionDailyStats } from '../../dbmanager/db_insert_sl/loSubscriptionDailyStats.inesrt';


export const postloSubscriptionDailyStats = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_loSubscriptionDailyStats(request.body);
  if (!valid) {
    const { errors } = create_loSubscriptionDailyStats;
    reject(errors);
  }
  else {
    const result = insert_loSubscriptionDailyStats(request);
    resolve(result);
  }
});
