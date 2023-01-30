import { select_contactComment_by_id_admin } from '../../dbmanager/db_select_sl/admin/contactComment.selectByID';
import { select_contactComment_by_id } from '../../dbmanager/db_select_sl/general/contactComment.selectByID';


export const getcontactComment_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_contactComment_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getcontactComment = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_contactComment_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
