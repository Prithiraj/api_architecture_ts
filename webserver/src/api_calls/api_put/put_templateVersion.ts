import edit_templateVersion from '../../schemas/ajv_schemas_update/templateVersion';
import { update_templateVersion } from '../../dbmanager/db_update_sl/general/templateVersion.update';
import { update_templateVersion_admin } from '../../dbmanager/db_update_sl/admin/templateVersion.update';


export const puttemplateVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_templateVersion(request.body);
  if (!valid) {
    const { errors } = edit_templateVersion;
    reject(errors);
  }
  else {
    try {
      const result = update_templateVersion(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const puttemplateVersion_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_templateVersion(request.body);
  if (!valid) {
    const { errors } = edit_templateVersion;
    reject(errors);
  }
  else {
      try {
        const result = update_templateVersion_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
