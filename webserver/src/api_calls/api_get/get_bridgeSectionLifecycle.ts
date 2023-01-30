import { select_bridgeSectionLifecycle_by_id_admin } from '../../dbmanager/db_select_sl/admin/bridgeSectionLifecycle.selectByID';
import { select_bridgeSectionLifecycle_by_id } from '../../dbmanager/db_select_sl/general/bridgeSectionLifecycle.selectByID';


export const getbridgeSectionLifecycle_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeSectionLifecycle_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getbridgeSectionLifecycle = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_bridgeSectionLifecycle_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
