import { select_template_by_id_admin } from '../../dbmanager/db_select_sl/admin/template.selectByID';
import { select_template_by_id } from '../../dbmanager/db_select_sl/general/template.selectByID';


export const gettemplate_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_template_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const gettemplate = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_template_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
