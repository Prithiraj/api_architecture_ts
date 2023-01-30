import { select_events_by_id_admin } from '../../dbmanager/db_select_sl/admin/events.selectByID';
import { select_events_by_id } from '../../dbmanager/db_select_sl/general/events.selectByID';


export const getevents_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_events_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getevents = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_events_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
