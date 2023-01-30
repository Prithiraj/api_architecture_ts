import { select_account_by_id_admin } from '../../dbmanager/db_select_sl/admin/account.selectByID';
import { select_account_by_id } from '../../dbmanager/db_select_sl/general/account.selectByID';


export const getaccount_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_account_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getaccount = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_account_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
