import { select_bookCopies_by_id_admin } from '../../dbmanager/db_select_sl/admin/bookCopies.selectByID';
import { select_bookCopies_by_id } from '../../dbmanager/db_select_sl/general/bookCopies.selectByID';


export const getbookCopies_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bookCopies_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbookCopies = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bookCopies_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
