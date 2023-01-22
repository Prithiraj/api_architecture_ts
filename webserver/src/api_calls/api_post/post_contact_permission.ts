import create_contactPermission from '../../schemas/ajv_schemas_create/contactPermission';
import { insert_contactPermission } from '../../dbmanager/db_insert_sl/contactPermission.inesrt';


export const postcontactPermission = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactPermission(request.body);
  if (!valid) {
    const { errors } = create_contactPermission;
    reject(errors);
  }
  else {
    const result = insert_contactPermission(request);
    resolve(result);
  }
});
