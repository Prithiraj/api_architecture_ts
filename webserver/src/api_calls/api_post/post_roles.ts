import create_roles from '../../schemas/ajv_schemas_create/roles';
import { insert_roles } from '../../dbmanager/db_insert_sl/roles.insert';


export const postroles = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_roles(request.body);
  if (!valid) {
    const { errors } = create_roles;
    reject(errors);
  }
  else {
    try {
      const result = insert_roles(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
