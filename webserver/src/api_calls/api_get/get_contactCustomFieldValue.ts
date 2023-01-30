import { select_contactCustomFieldValue_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactCustomFieldValue.selectByID';
import { select_contactCustomFieldValue_by_id } from '../../dbmanager/db_select_sl/general/contactCustomFieldValue.selectByID';


export const getcontactCustomFieldValue_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactCustomFieldValue_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactCustomFieldValue = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactCustomFieldValue_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
