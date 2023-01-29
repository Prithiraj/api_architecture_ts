import create_loLead from '../../schemas/ajv_schemas_create/loLead';
import { insert_loLead } from '../../dbmanager/db_insert_sl/loLead.insert';


export const postloLead = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_loLead(request.body);
  if (!valid) {
    const { errors } = create_loLead;
    reject(errors);
  }
  else {
    try {
      const result = insert_loLead(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
