import create_account from '../../schemas/ajv_schemas_create/account';
import { insert_account } from '../../dbmanager/db_insert_sl/account.insert';


export const postaccount = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_account(request.body);
  if (!valid) {
    const { errors } = create_account;
    reject(errors);
  }
  else {
    try {
      const result = insert_account(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
