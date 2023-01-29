import edit_organization from '../../schemas/ajv_schemas_update/organization';
import { update_organization } from '../../dbmanager/db_update_sl/general/organization.update';
import { update_organization_admin } from '../../dbmanager/db_update_sl/admin/organization.update';


export const putorganization = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_organization(request.body);
  if (!valid) {
    const { errors } = edit_organization;
    reject(errors);
  }
  else {
    try {
      const result = update_organization(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putorganization_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_organization(request.body);
  if (!valid) {
    const { errors } = edit_organization;
    reject(errors);
  }
  else {
      try {
        const result = update_organization_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
