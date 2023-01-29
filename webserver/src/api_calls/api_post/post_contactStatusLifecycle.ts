import create_contactStatusLifecycle from '../../schemas/ajv_schemas_create/contactStatusLifecycle';
import { insert_contactStatusLifecycle } from '../../dbmanager/db_insert_sl/contactStatusLifecycle.insert';


export const postcontactStatusLifecycle = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactStatusLifecycle(request.body);
  if (!valid) {
    const { errors } = create_contactStatusLifecycle;
    reject(errors);
  }
  else {
    try {
      const result = insert_contactStatusLifecycle(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
