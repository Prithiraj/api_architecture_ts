import { select_templateVersion_by_id_admin } from '../../dbmanager/db_select_sl/admin/templateVersion.selectByID';
import { select_templateVersion_by_id } from '../../dbmanager/db_select_sl/general/templateVersion.selectByID';


export const gettemplateVersion_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_templateVersion_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const gettemplateVersion = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_templateVersion_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
