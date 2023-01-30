import { select_bridgeContactContact_by_id_admin } from '../../dbmanager/db_select_sl/admin/bridgeContactContact.selectByID';
import { select_bridgeContactContact_by_id } from '../../dbmanager/db_select_sl/general/bridgeContactContact.selectByID';


export const getbridgeContactContact_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactContact_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbridgeContactContact = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactContact_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
