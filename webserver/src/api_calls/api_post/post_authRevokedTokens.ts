import create_authRevokedTokens from '../../schemas/ajv_schemas_create/authRevokedTokens';
import { insert_authRevokedTokens } from '../../dbmanager/db_insert_sl/authRevokedTokens.insert';


export const postauthRevokedTokens = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_authRevokedTokens(request.body);
  if (!valid) {
    const { errors } = create_authRevokedTokens;
    reject(errors);
  }
  else {
    try {
      const result = insert_authRevokedTokens(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
