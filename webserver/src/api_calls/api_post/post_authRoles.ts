import create_authRoles from '../../schemas/ajv_schemas_create/authRoles';
import { insert_authRoles } from '../../dbmanager/db_insert_sl/authRoles.insert';


export const postauthRoles = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_authRoles(request.body);
  if (!valid) {
    const { errors } = create_authRoles;
    reject(errors);
  }
  else {
    try {
      const result = insert_authRoles(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
