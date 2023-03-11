import create_authUserRoles from '../../schemas/ajv_schemas_create/authUserRoles';
import { insert_authUserRoles } from '../../dbmanager/db_insert_sl/authUserRoles.insert';


export const postauthUserRoles = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_authUserRoles(request.body);
  if (!valid) {
    const { errors } = create_authUserRoles;
    reject(errors);
  }
  else {
    try {
      const result = insert_authUserRoles(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
