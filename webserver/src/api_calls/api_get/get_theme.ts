import { select_theme_by_id_admin } from '../../dbmanager/db_select_sl/admin/theme.selectByID';
import { select_theme_by_id } from '../../dbmanager/db_select_sl/general/theme.selectByID';


export const gettheme_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_theme_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const gettheme = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_theme_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
