import edit_elementtotemplateVersion from '../../schemas/ajv_schemas_update/elementtotemplateVersion';
import { update_elementtotemplateVersion } from '../../dbmanager/db_update_sl/general/elementtotemplateVersion.update';
import { update_elementtotemplateVersion_admin } from '../../dbmanager/db_update_sl/admin/elementtotemplateVersion.update';


export const putelementtotemplateVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_elementtotemplateVersion(request.body);
  if (!valid) {
    const { errors } = edit_elementtotemplateVersion;
    reject(errors);
  }
  else {
    try {
      const result = update_elementtotemplateVersion(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putelementtotemplateVersion_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_elementtotemplateVersion(request.body);
  if (!valid) {
    const { errors } = edit_elementtotemplateVersion;
    reject(errors);
  }
  else {
      try {
        const result = update_elementtotemplateVersion_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
