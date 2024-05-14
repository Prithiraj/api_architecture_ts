import { select_authors_by_id_admin } from '../../dbmanager/db_select_sl/admin/authors.selectByID';
import { select_authors_by_id } from '../../dbmanager/db_select_sl/general/authors.selectByID';


export const getauthors_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_authors_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getauthors = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_authors_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
