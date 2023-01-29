import edit_stripeSubscriptionItem from '../../schemas/ajv_schemas_update/stripeSubscriptionItem';
import { update_stripeSubscriptionItem } from '../../dbmanager/db_update_sl/general/stripeSubscriptionItem.update';
import { update_stripeSubscriptionItem_admin } from '../../dbmanager/db_update_sl/admin/stripeSubscriptionItem.update';


export const putstripeSubscriptionItem = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_stripeSubscriptionItem(request.body);
  if (!valid) {
    const { errors } = edit_stripeSubscriptionItem;
    reject(errors);
  }
  else {
    try {
      const result = update_stripeSubscriptionItem(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putstripeSubscriptionItem_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_stripeSubscriptionItem(request.body);
  if (!valid) {
    const { errors } = edit_stripeSubscriptionItem;
    reject(errors);
  }
  else {
      try {
        const result = update_stripeSubscriptionItem_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
