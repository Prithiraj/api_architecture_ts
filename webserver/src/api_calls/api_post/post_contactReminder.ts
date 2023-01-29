import create_contactReminder from '../../schemas/ajv_schemas_create/contactReminder';
import { insert_contactReminder } from '../../dbmanager/db_insert_sl/contactReminder.insert';


export const postcontactReminder = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactReminder(request.body);
  if (!valid) {
    const { errors } = create_contactReminder;
    reject(errors);
  }
  else {
    try {
      const result = insert_contactReminder(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
