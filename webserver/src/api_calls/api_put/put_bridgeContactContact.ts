import edit_bridgeContactContact from '../../schemas/ajv_schemas_update/bridgeContactContact';
import { update_bridgeContactContact } from '../../dbmanager/db_update_sl/general/bridgeContactContact.update';
import { update_bridgeContactContact_admin } from '../../dbmanager/db_update_sl/admin/bridgeContactContact.update';


export const putbridgeContactContact = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactContact(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactContact;
    reject(errors);
  }
  else {
    try {
      const result = update_bridgeContactContact(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbridgeContactContact_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactContact(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactContact;
    reject(errors);
  }
  else {
      try {
        const result = update_bridgeContactContact_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
