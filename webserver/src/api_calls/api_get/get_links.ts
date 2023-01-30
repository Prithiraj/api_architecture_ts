import { select_links_by_id_admin } from '../../dbmanager/db_select_sl/admin/links.selectByID';
import { select_links_by_id } from '../../dbmanager/db_select_sl/general/links.selectByID';


export const getlinks_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_links_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getlinks = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_links_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
