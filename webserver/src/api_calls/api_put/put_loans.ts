import edit_loans from '../../schemas/ajv_schemas_update/loans';
import { update_loans } from '../../dbmanager/db_update_sl/general/loans.update';
import { update_loans_admin } from '../../dbmanager/db_update_sl/admin/loans.update';


export const putloans = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loans(request.body);
  if (!valid) {
    const { errors } = edit_loans;
    reject(errors);
  }
  else {
    try {
      const result = update_loans(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putloans_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loans(request.body);
  if (!valid) {
    const { errors } = edit_loans;
    reject(errors);
  }
  else {
      try {
        const result = update_loans_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
