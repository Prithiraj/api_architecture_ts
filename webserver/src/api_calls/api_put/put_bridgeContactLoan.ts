import edit_bridgeContactLoan from '../../schemas/ajv_schemas_update/bridgeContactLoan';
import { update_bridgeContactLoan } from '../../dbmanager/db_update_sl/general/bridgeContactLoan.update';
import { update_bridgeContactLoan_admin } from '../../dbmanager/db_update_sl/admin/bridgeContactLoan.update';


export const putbridgeContactLoan = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactLoan(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactLoan;
    reject(errors);
  }
  else {
    try {
      const result = update_bridgeContactLoan(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbridgeContactLoan_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactLoan(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactLoan;
    reject(errors);
  }
  else {
      try {
        const result = update_bridgeContactLoan_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
