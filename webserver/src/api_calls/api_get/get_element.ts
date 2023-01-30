import { select_element_by_id_admin } from '../../dbmanager/db_select_sl/admin/element.selectByID';
import { select_element_by_id } from '../../dbmanager/db_select_sl/general/element.selectByID';


export const getelement_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_element_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getelement = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_element_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
