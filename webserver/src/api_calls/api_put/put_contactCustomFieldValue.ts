import edit_contactCustomFieldValue from '../../schemas/ajv_schemas_update/contactCustomFieldValue';
import { update_contactCustomFieldValue } from '../../dbmanager/db_update_sl/general/contactCustomFieldValue.update';
import { update_contactCustomFieldValue_admin } from '../../dbmanager/db_update_sl/admin/contactCustomFieldValue.update';


export const putcontactCustomFieldValue = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactCustomFieldValue(request.body);
  if (!valid) {
    const { errors } = edit_contactCustomFieldValue;
    reject(errors);
  }
  else {
    try {
      const result = update_contactCustomFieldValue(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactCustomFieldValue_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactCustomFieldValue(request.body);
  if (!valid) {
    const { errors } = edit_contactCustomFieldValue;
    reject(errors);
  }
  else {
      try {
        const result = update_contactCustomFieldValue_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
