import { select_contactReminder_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactReminder.selectByID';
import { select_contactReminder_by_id } from '../../dbmanager/db_select_sl/general/contactReminder.selectByID';


export const getcontactReminder_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactReminder_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactReminder = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactReminder_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
