import create_loLeadRaw from '../../schemas/ajv_schemas_create/loLeadRaw';
import { insert_loLeadRaw } from '../../dbmanager/db_insert_sl/loLeadRaw.insert';


export const postloLeadRaw = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_loLeadRaw(request.body);
  if (!valid) {
    const { errors } = create_loLeadRaw;
    reject(errors);
  }
  else {
    try {    
      const result = insert_loLeadRaw(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
