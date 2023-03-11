import { select_authUsers_by_id_admin } from '../../dbmanager/db_select_sl/admin/authUsers.selectByID';
import { select_authUsers_by_id } from '../../dbmanager/db_select_sl/general/authUsers.selectByID';


export const getauthUsers_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_authUsers_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getauthUsers = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_authUsers_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
