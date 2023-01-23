import create_user from '../../schemas/ajv_schemas_create/user';
import { insert_user } from '../../dbmanager/db_insert_sl/user.insert';


export const postuser = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_user(request.body);
  if (!valid) {
    const { errors } = create_user;
    reject(errors);
  }
  else {
    try {    
      const result = insert_user(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
