import { select_bridgeContactUser_by_id_admin } from '../../dbmanager/db_select_sl/admin/bridgeContactUser.selectByID';
import { select_bridgeContactUser_by_id } from '../../dbmanager/db_select_sl/general/bridgeContactUser.selectByID';


export const getbridgeContactUser_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactUser_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbridgeContactUser = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactUser_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
