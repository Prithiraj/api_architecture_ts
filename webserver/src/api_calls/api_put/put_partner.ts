import edit_partner from '../../schemas/ajv_schemas_update/partner';
import { update_partner } from '../../dbmanager/db_update_sl/general/partner.update';
import { update_partner_admin } from '../../dbmanager/db_update_sl/admin/partner.update';


export const putpartner = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_partner(request.body);
  if (!valid) {
    const { errors } = edit_partner;
    reject(errors);
  }
  else {
    try {
      const result = update_partner(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putpartner_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_partner(request.body);
  if (!valid) {
    const { errors } = edit_partner;
    reject(errors);
  }
  else {
      try {
        const result = update_partner_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
