import edit_contactTag from '../../schemas/ajv_schemas_update/contactTag';
import { update_contactTag } from '../../dbmanager/db_update_sl/general/contactTag.update';
import { update_contactTag_admin } from '../../dbmanager/db_update_sl/admin/contactTag.update';


export const putcontactTag = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactTag(request.body);
  if (!valid) {
    const { errors } = edit_contactTag;
    reject(errors);
  }
  else {
    try {
      const result = update_contactTag(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactTag_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactTag(request.body);
  if (!valid) {
    const { errors } = edit_contactTag;
    reject(errors);
  }
  else {
      try {
        const result = update_contactTag_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
