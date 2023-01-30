import { select_routing_by_id_admin } from '../../dbmanager/db_select_sl/admin/routing.selectByID';
import { select_routing_by_id } from '../../dbmanager/db_select_sl/general/routing.selectByID';


export const getrouting_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_routing_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getrouting = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_routing_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
