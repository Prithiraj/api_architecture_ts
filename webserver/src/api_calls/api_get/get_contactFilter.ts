import { select_contactFilter_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactFilter.selectByID';
import { select_contactFilter_by_id } from '../../dbmanager/db_select_sl/general/contactFilter.selectByID';


export const getcontactFilter_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactFilter_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactFilter = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactFilter_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
