import { select_pageVersion_by_id_admin } from '../../dbmanager/db_select_sl/admin/pageVersion.selectByID';
import { select_pageVersion_by_id } from '../../dbmanager/db_select_sl/general/pageVersion.selectByID';


export const getpageVersion_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_pageVersion_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getpageVersion = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_pageVersion_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
