import create_loLeadSource from '../../schemas/ajv_schemas_create/loLeadSource';
import { insert_loLeadSource } from '../../dbmanager/db_insert_sl/loLeadSource.insert';


export const postloLeadSource = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_loLeadSource(request.body);
  if (!valid) {
    const { errors } = create_loLeadSource;
    reject(errors);
  }
  else {
    try {    
      const result = insert_loLeadSource(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
