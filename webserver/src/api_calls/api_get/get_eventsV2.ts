import { select_eventsV2_by_id_admin } from '../../dbmanager/db_select_sl/admin/eventsV2.selectByID';
import { select_eventsV2_by_id } from '../../dbmanager/db_select_sl/general/eventsV2.selectByID';


export const geteventsV2_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_eventsV2_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const geteventsV2 = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_eventsV2_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
