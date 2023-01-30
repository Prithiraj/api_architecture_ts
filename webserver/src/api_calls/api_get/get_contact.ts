import { select_contact_by_id_admin } from '../../dbmanager/db_select_sl/admin/contact.selectByID';
import { select_contact_by_id } from '../../dbmanager/db_select_sl/general/contact.selectByID';


export const getcontact_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contact_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontact = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contact_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
