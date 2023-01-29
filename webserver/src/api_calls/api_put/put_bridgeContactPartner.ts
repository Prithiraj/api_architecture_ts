import edit_bridgeContactPartner from '../../schemas/ajv_schemas_update/bridgeContactPartner';
import { update_bridgeContactPartner } from '../../dbmanager/db_update_sl/general/bridgeContactPartner.update';
import { update_bridgeContactPartner_admin } from '../../dbmanager/db_update_sl/admin/bridgeContactPartner.update';


export const putbridgeContactPartner = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactPartner(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactPartner;
    reject(errors);
  }
  else {
    try {
      const result = update_bridgeContactPartner(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbridgeContactPartner_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactPartner(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactPartner;
    reject(errors);
  }
  else {
      try {
        const result = update_bridgeContactPartner_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
