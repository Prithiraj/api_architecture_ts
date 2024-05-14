import { select_members_by_id_admin } from '../../dbmanager/db_select_sl/admin/members.selectByID';
import { select_members_by_id } from '../../dbmanager/db_select_sl/general/members.selectByID';


export const getmembers_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_members_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getmembers = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_members_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
