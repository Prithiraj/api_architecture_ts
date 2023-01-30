import { select_loSubscription_by_id_admin } from '../../dbmanager/db_select_sl/admin/loSubscription.selectByID';
import { select_loSubscription_by_id } from '../../dbmanager/db_select_sl/general/loSubscription.selectByID';


export const getloSubscription_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_loSubscription_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getloSubscription = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_loSubscription_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
