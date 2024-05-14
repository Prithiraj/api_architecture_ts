import { select_loans_by_id_admin } from '../../dbmanager/db_select_sl/admin/loans.selectByID';
import { select_loans_by_id } from '../../dbmanager/db_select_sl/general/loans.selectByID';


export const getloans_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_loans_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getloans = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_loans_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
