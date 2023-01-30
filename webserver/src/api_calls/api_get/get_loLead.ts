import { select_loLead_by_id_admin } from '../../dbmanager/db_select_sl/admin/loLead.selectByID';
import { select_loLead_by_id } from '../../dbmanager/db_select_sl/general/loLead.selectByID';


export const getloLead_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_loLead_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getloLead = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_loLead_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
