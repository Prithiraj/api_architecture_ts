import create_bridgeContactUser from '../../schemas/ajv_schemas_create/bridgeContactUser';
import { insert_bridgeContactUser } from '../../dbmanager/db_insert_sl/bridgeContactUser.insert';


export const postbridgeContactUser = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bridgeContactUser(request.body);
  if (!valid) {
    const { errors } = create_bridgeContactUser;
    reject(errors);
  }
  else {
    try {    
      const result = insert_bridgeContactUser(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
