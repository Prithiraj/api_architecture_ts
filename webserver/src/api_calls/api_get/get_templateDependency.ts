import { select_templateDependency_by_id_admin } from '../../dbmanager/db_select_sl/admin/templateDependency.selectByID';
import { select_templateDependency_by_id } from '../../dbmanager/db_select_sl/general/templateDependency.selectByID';


export const gettemplateDependency_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_templateDependency_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const gettemplateDependency = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_templateDependency_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
