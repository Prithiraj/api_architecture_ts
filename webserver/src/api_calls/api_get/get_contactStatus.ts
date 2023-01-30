import { select_contactStatus_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactStatus.selectByID';
import { select_contactStatus_by_id } from '../../dbmanager/db_select_sl/general/contactStatus.selectByID';


export const getcontactStatus_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactStatus_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactStatus = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactStatus_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
