import { select_bridgeContactPartner_by_id_admin } from '../../dbmanager/db_select_sl/admin/bridgeContactPartner.selectByID';
import { select_bridgeContactPartner_by_id } from '../../dbmanager/db_select_sl/general/bridgeContactPartner.selectByID';


export const getbridgeContactPartner_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactPartner_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbridgeContactPartner = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactPartner_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
