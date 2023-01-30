import { select_bridgeContactTag_by_id_admin } from '../../dbmanager/db_select_sl/admin/bridgeContactTag.selectByID';
import { select_bridgeContactTag_by_id } from '../../dbmanager/db_select_sl/general/bridgeContactTag.selectByID';


export const getbridgeContactTag_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactTag_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbridgeContactTag = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactTag_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
