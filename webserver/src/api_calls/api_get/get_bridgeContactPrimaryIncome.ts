import { select_bridgeContactPrimaryIncome_by_id_admin } from '../../dbmanager/db_select_sl/admin/bridgeContactPrimaryIncome.selectByID';
import { select_bridgeContactPrimaryIncome_by_id } from '../../dbmanager/db_select_sl/general/bridgeContactPrimaryIncome.selectByID';


export const getbridgeContactPrimaryIncome_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactPrimaryIncome_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbridgeContactPrimaryIncome = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactPrimaryIncome_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
