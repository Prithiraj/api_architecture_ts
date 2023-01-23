import create_routing from '../../schemas/ajv_schemas_create/routing';
import { insert_routing } from '../../dbmanager/db_insert_sl/routing.insert';


export const postrouting = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_routing(request.body);
  if (!valid) {
    const { errors } = create_routing;
    reject(errors);
  }
  else {
    try {    
      const result = insert_routing(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
