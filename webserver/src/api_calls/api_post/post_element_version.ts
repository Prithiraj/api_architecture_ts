import create_elementVersion from '../../schemas/ajv_schemas_create/elementVersion';
import { insert_elementVersion } from '../../dbmanager/db_insert_sl/elementVersion.insert';


export const postelementVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_elementVersion(request.body);
  if (!valid) {
    const { errors } = create_elementVersion;
    reject(errors);
  }
  else {
    try {    
      const result = insert_elementVersion(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
