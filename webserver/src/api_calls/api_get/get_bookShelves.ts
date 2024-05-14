import { select_bookShelves_by_id_admin } from '../../dbmanager/db_select_sl/admin/bookShelves.selectByID';
import { select_bookShelves_by_id } from '../../dbmanager/db_select_sl/general/bookShelves.selectByID';


export const getbookShelves_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bookShelves_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbookShelves = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bookShelves_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
