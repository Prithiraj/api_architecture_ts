import edit_bridgeContactPrimaryIncome from '../../schemas/ajv_schemas_update/bridgeContactPrimaryIncome';
import { update_bridgeContactPrimaryIncome } from '../../dbmanager/db_update_sl/general/bridgeContactPrimaryIncome.update';
import { update_bridgeContactPrimaryIncome_admin } from '../../dbmanager/db_update_sl/admin/bridgeContactPrimaryIncome.update';


export const putbridgeContactPrimaryIncome = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactPrimaryIncome(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactPrimaryIncome;
    reject(errors);
  }
  else {
    try {
      const result = update_bridgeContactPrimaryIncome(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbridgeContactPrimaryIncome_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactPrimaryIncome(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactPrimaryIncome;
    reject(errors);
  }
  else {
      try {
        const result = update_bridgeContactPrimaryIncome_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
