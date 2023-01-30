import { select_stripeSubscriptionItem_by_id_admin } from '../../dbmanager/db_select_sl/admin/stripeSubscriptionItem.selectByID';
import { select_stripeSubscriptionItem_by_id } from '../../dbmanager/db_select_sl/general/stripeSubscriptionItem.selectByID';


export const getstripeSubscriptionItem_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_stripeSubscriptionItem_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getstripeSubscriptionItem = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_stripeSubscriptionItem_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
