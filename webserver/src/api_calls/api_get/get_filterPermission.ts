import { select_filterPermission_by_id_admin } from '../../dbmanager/db_select_sl/admin/filterPermission.selectByID';
import { select_filterPermission_by_id } from '../../dbmanager/db_select_sl/general/filterPermission.selectByID';


export const getfilterPermission_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_filterPermission_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getfilterPermission = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_filterPermission_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
