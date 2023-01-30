import { select_elementVersion_by_id_admin } from '../../dbmanager/db_select_sl/admin/elementVersion.selectByID';
import { select_elementVersion_by_id } from '../../dbmanager/db_select_sl/general/elementVersion.selectByID';


export const getelementVersion_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_elementVersion_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getelementVersion = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_elementVersion_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
