import { select_contactPermission_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactPermission.selectByID';
import { select_contactPermission_by_id } from '../../dbmanager/db_select_sl/general/contactPermission.selectByID';


export const getcontactPermission_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactPermission_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactPermission = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactPermission_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
