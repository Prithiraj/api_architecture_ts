import { select_roles_by_id_admin } from '../../dbmanager/db_select_sl/admin/roles.selectByID';
import { select_roles_by_id } from '../../dbmanager/db_select_sl/general/roles.selectByID';


export const getroles_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_roles_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getroles = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_roles_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
