import { select_authUserRoles_by_id_admin } from '../../dbmanager/db_select_sl/admin/authUserRoles.selectByID';
import { select_authUserRoles_by_id } from '../../dbmanager/db_select_sl/general/authUserRoles.selectByID';


export const getauthUserRoles_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_authUserRoles_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getauthUserRoles = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_authUserRoles_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
