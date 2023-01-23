import create_loSubscription from '../../schemas/ajv_schemas_create/loSubscription';
import { insert_loSubscription } from '../../dbmanager/db_insert_sl/loSubscription.insert';


export const postloSubscription = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_loSubscription(request.body);
  if (!valid) {
    const { errors } = create_loSubscription;
    reject(errors);
  }
  else {
    try {    
      const result = insert_loSubscription(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
