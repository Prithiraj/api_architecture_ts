import { select_contactTag_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactTag.selectByID';
import { select_contactTag_by_id } from '../../dbmanager/db_select_sl/general/contactTag.selectByID';


export const getcontactTag_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactTag_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactTag = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactTag_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
