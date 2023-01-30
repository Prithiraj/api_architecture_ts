import { select_organization_by_id_admin } from '../../dbmanager/db_select_sl/admin/organization.selectByID';
import { select_organization_by_id } from '../../dbmanager/db_select_sl/general/organization.selectByID';


export const getorganization_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_organization_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getorganization = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_organization_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
