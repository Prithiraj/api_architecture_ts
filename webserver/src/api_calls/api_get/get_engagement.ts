import { select_engagement_by_id_admin } from '../../dbmanager/db_select_sl/admin/engagement.selectByID';
import { select_engagement_by_id } from '../../dbmanager/db_select_sl/general/engagement.selectByID';


export const getengagement_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_engagement_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getengagement = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_engagement_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
