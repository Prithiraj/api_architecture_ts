import { select_authRevokedTokens_by_id_admin } from '../../dbmanager/db_select_sl/admin/authRevokedTokens.selectByID';
import { select_authRevokedTokens_by_id } from '../../dbmanager/db_select_sl/general/authRevokedTokens.selectByID';


export const getauthRevokedTokens_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_authRevokedTokens_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getauthRevokedTokens = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_authRevokedTokens_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
