import edit_contactCustomFieldSection from '../../schemas/ajv_schemas_update/contactCustomFieldSection';
import { update_contactCustomFieldSection } from '../../dbmanager/db_update_sl/general/contactCustomFieldSection.update';
import { update_contactCustomFieldSection_admin } from '../../dbmanager/db_update_sl/admin/contactCustomFieldSection.update';


export const putcontactCustomFieldSection = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactCustomFieldSection(request.body);
  if (!valid) {
    const { errors } = edit_contactCustomFieldSection;
    reject(errors);
  }
  else {
    try {
      const result = update_contactCustomFieldSection(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactCustomFieldSection_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactCustomFieldSection(request.body);
  if (!valid) {
    const { errors } = edit_contactCustomFieldSection;
    reject(errors);
  }
  else {
      try {
        const result = update_contactCustomFieldSection_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
