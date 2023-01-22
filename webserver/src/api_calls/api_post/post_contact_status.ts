import create_contactStatus from '../../schemas/ajv_schemas_create/contactStatus';
import { insert_contactStatus } from '../../dbmanager/db_insert_sl/contactStatus.inesrt';


export const postcontactStatus = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactStatus(request.body);
  if (!valid) {
    const { errors } = create_contactStatus;
    reject(errors);
  }
  else {
    const result = insert_contactStatus(request);
    resolve(result);
  }
});
