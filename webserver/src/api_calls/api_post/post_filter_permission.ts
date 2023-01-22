import create_filterPermission from '../../schemas/ajv_schemas_create/filterPermission';
import { insert_filterPermission } from '../../dbmanager/db_insert_sl/filterPermission.inesrt';


export const postfilterPermission = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_filterPermission(request.body);
  if (!valid) {
    const { errors } = create_filterPermission;
    reject(errors);
  }
  else {
    const result = insert_filterPermission(request);
    resolve(result);
  }
});
