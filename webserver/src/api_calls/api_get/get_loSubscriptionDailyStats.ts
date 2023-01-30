import { select_loSubscriptionDailyStats_by_id_admin } from '../../dbmanager/db_select_sl/admin/loSubscriptionDailyStats.selectByID';
import { select_loSubscriptionDailyStats_by_id } from '../../dbmanager/db_select_sl/general/loSubscriptionDailyStats.selectByID';


export const getloSubscriptionDailyStats_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_loSubscriptionDailyStats_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getloSubscriptionDailyStats = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_loSubscriptionDailyStats_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
