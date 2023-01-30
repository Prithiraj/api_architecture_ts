import { select_activityLog_by_id_admin } from '../../dbmanager/db_select_sl/admin/activityLog.selectByID';
import { select_activityLog_by_id } from '../../dbmanager/db_select_sl/general/activityLog.selectByID';


export const getactivityLog_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_activityLog_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getactivityLog = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_activityLog_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
