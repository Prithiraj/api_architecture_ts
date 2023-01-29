import edit_pageVersion from '../../schemas/ajv_schemas_update/pageVersion';
import { update_pageVersion } from '../../dbmanager/db_update_sl/general/pageVersion.update';
import { update_pageVersion_admin } from '../../dbmanager/db_update_sl/admin/pageVersion.update';


export const putpageVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_pageVersion(request.body);
  if (!valid) {
    const { errors } = edit_pageVersion;
    reject(errors);
  }
  else {
    try {
      const result = update_pageVersion(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putpageVersion_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_pageVersion(request.body);
  if (!valid) {
    const { errors } = edit_pageVersion;
    reject(errors);
  }
  else {
      try {
        const result = update_pageVersion_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
