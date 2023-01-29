import create_stripeSubscriptionItem from '../../schemas/ajv_schemas_create/stripeSubscriptionItem';
import { insert_stripeSubscriptionItem } from '../../dbmanager/db_insert_sl/stripeSubscriptionItem.insert';


export const poststripeSubscriptionItem = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_stripeSubscriptionItem(request.body);
  if (!valid) {
    const { errors } = create_stripeSubscriptionItem;
    reject(errors);
  }
  else {
    try {
      const result = insert_stripeSubscriptionItem(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
