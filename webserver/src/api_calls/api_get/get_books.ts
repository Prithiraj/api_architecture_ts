import { select_books_by_id_admin } from '../../dbmanager/db_select_sl/admin/books.selectByID';
import { select_books_by_id } from '../../dbmanager/db_select_sl/general/books.selectByID';


export const getbooks_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_books_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbooks = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_books_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
