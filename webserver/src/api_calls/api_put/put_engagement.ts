import edit_engagement from '../../schemas/ajv_schemas_update/engagement';
import { update_engagement } from '../../dbmanager/db_update_sl/general/engagement.update';
import { update_engagement_admin } from '../../dbmanager/db_update_sl/admin/engagement.update';


export const putengagement = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_engagement(request.body);
  if (!valid) {
    const { errors } = edit_engagement;
    reject(errors);
  }
  else {
    try {
      const result = update_engagement(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putengagement_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_engagement(request.body);
  if (!valid) {
    const { errors } = edit_engagement;
    reject(errors);
  }
  else {
      try {
        const result = update_engagement_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
