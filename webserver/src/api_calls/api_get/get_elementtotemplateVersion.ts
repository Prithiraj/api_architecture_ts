import { select_elementtotemplateVersion_by_id_admin } from '../../dbmanager/db_select_sl/admin/elementtotemplateVersion.selectByID';
import { select_elementtotemplateVersion_by_id } from '../../dbmanager/db_select_sl/general/elementtotemplateVersion.selectByID';


export const getelementtotemplateVersion_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_elementtotemplateVersion_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getelementtotemplateVersion = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_elementtotemplateVersion_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
