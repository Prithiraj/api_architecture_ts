import edit_contactCustomField from '../../schemas/ajv_schemas_update/contactCustomField';
import { update_contactCustomField } from '../../dbmanager/db_update_sl/general/contactCustomField.update';
import { update_contactCustomField_admin } from '../../dbmanager/db_update_sl/admin/contactCustomField.update';


export const putcontactCustomField = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactCustomField(request.body);
  if (!valid) {
    const { errors } = edit_contactCustomField;
    reject(errors);
  }
  else {
    try {
      const result = update_contactCustomField(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactCustomField_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactCustomField(request.body);
  if (!valid) {
    const { errors } = edit_contactCustomField;
    reject(errors);
  }
  else {
      try {
        const result = update_contactCustomField_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
