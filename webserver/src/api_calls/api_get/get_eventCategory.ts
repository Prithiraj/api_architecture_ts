import { select_eventCategory_by_id_admin } from '../../dbmanager/db_select_sl/admin/eventCategory.selectByID';
import { select_eventCategory_by_id } from '../../dbmanager/db_select_sl/general/eventCategory.selectByID';


export const geteventCategory_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_eventCategory_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const geteventCategory = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_eventCategory_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
