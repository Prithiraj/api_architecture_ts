import { select_contactCustomField_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactCustomField.selectByID';
import { select_contactCustomField_by_id } from '../../dbmanager/db_select_sl/general/contactCustomField.selectByID';


export const getcontactCustomField_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactCustomField_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactCustomField = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactCustomField_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
