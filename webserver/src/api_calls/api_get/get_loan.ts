import { select_loan_by_id_admin } from '../../dbmanager/db_select_sl/admin/loan.selectByID';
import { select_loan_by_id } from '../../dbmanager/db_select_sl/general/loan.selectByID';


export const getloan_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_loan_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getloan = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_loan_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
