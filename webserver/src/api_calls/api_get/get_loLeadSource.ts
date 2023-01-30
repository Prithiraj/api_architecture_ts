import { select_loLeadSource_by_id_admin } from '../../dbmanager/db_select_sl/admin/loLeadSource.selectByID';
import { select_loLeadSource_by_id } from '../../dbmanager/db_select_sl/general/loLeadSource.selectByID';


export const getloLeadSource_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_loLeadSource_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getloLeadSource = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_loLeadSource_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
