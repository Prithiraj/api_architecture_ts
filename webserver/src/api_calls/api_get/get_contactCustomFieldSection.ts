import { select_contactCustomFieldSection_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactCustomFieldSection.selectByID';
import { select_contactCustomFieldSection_by_id } from '../../dbmanager/db_select_sl/general/contactCustomFieldSection.selectByID';


export const getcontactCustomFieldSection_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactCustomFieldSection_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactCustomFieldSection = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactCustomFieldSection_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
