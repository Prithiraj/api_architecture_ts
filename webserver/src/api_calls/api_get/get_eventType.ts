import { select_eventType_by_id_admin } from '../../dbmanager/db_select_sl/admin/eventType.selectByID';
import { select_eventType_by_id } from '../../dbmanager/db_select_sl/general/eventType.selectByID';


export const geteventType_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_eventType_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const geteventType = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_eventType_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
