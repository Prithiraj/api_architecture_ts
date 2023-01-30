import { select_bridgeContactLoan_by_id_admin } from '../../dbmanager/db_select_sl/admin/bridgeContactLoan.selectByID';
import { select_bridgeContactLoan_by_id } from '../../dbmanager/db_select_sl/general/bridgeContactLoan.selectByID';


export const getbridgeContactLoan_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactLoan_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbridgeContactLoan = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeContactLoan_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
