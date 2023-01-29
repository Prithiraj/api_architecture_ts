import edit_elementVersion from '../../schemas/ajv_schemas_update/elementVersion';
import { update_elementVersion } from '../../dbmanager/db_update_sl/general/elementVersion.update';
import { update_elementVersion_admin } from '../../dbmanager/db_update_sl/admin/elementVersion.update';


export const putelementVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_elementVersion(request.body);
  if (!valid) {
    const { errors } = edit_elementVersion;
    reject(errors);
  }
  else {
    try {
      const result = update_elementVersion(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putelementVersion_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_elementVersion(request.body);
  if (!valid) {
    const { errors } = edit_elementVersion;
    reject(errors);
  }
  else {
      try {
        const result = update_elementVersion_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
