import create_contactStatusLifecycle from '../../schemas/ajv_schemas_create/contactStatusLifecycle';
import { insert_contactStatusLifecycle } from '../../dbmanager/db_insert_sl/contactStatusLifecycle.inesrt';


export const postcontactStatusLifecycle = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactStatusLifecycle(request.body);
  if (!valid) {
    const { errors } = create_contactStatusLifecycle;
    reject(errors);
  }
  else {
    const result = insert_contactStatusLifecycle(request);
    resolve(result);
  }
});
