import { select_incomeSource_by_id_admin } from '../../dbmanager/db_select_sl/admin/incomeSource.selectByID';
import { select_incomeSource_by_id } from '../../dbmanager/db_select_sl/general/incomeSource.selectByID';


export const getincomeSource_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_incomeSource_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getincomeSource = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_incomeSource_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
