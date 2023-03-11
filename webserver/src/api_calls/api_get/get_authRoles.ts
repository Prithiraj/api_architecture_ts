import { select_authRoles_by_id_admin } from '../../dbmanager/db_select_sl/admin/authRoles.selectByID';
import { select_authRoles_by_id } from '../../dbmanager/db_select_sl/general/authRoles.selectByID';


export const getauthRoles_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_authRoles_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getauthRoles = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_authRoles_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
