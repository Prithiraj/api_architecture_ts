import { select_contactStatusLifecycle_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactStatusLifecycle.selectByID';
import { select_contactStatusLifecycle_by_id } from '../../dbmanager/db_select_sl/general/contactStatusLifecycle.selectByID';


export const getcontactStatusLifecycle_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactStatusLifecycle_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactStatusLifecycle = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactStatusLifecycle_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
