import create_authUsers from '../../schemas/ajv_schemas_create/authUsers';
import { insert_authUsers } from '../../dbmanager/db_insert_sl/authUsers.insert';


export const postauthUsers = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_authUsers(request.body);
  if (!valid) {
    const { errors } = create_authUsers;
    reject(errors);
  }
  else {
    try {
      const result = insert_authUsers(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
