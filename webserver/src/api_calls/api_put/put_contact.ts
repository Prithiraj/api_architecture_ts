import edit_contact from '../../schemas/ajv_schemas_update/contact';
import { update_contact } from '../../dbmanager/db_update_sl/general/contact.update';
import { update_contact_admin } from '../../dbmanager/db_update_sl/admin/contact.update';


export const putcontact = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contact(request.body);
  if (!valid) {
    const { errors } = edit_contact;
    reject(errors);
  }
  else {
    try {
      const result = update_contact(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontact_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contact(request.body);
  if (!valid) {
    const { errors } = edit_contact;
    reject(errors);
  }
  else {
      try {
        const result = update_contact_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
