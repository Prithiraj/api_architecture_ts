import { select_contactOtherAssociates_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactOtherAssociates.selectByID';
import { select_contactOtherAssociates_by_id } from '../../dbmanager/db_select_sl/general/contactOtherAssociates.selectByID';


export const getcontactOtherAssociates_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactOtherAssociates_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactOtherAssociates = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactOtherAssociates_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
