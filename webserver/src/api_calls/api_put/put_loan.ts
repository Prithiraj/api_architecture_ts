import edit_loan from '../../schemas/ajv_schemas_update/loan';
import { update_loan } from '../../dbmanager/db_update_sl/general/loan.update';
import { update_loan_admin } from '../../dbmanager/db_update_sl/admin/loan.update';


export const putloan = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loan(request.body);
  if (!valid) {
    const { errors } = edit_loan;
    reject(errors);
  }
  else {
    try {
      const result = update_loan(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putloan_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_loan(request.body);
  if (!valid) {
    const { errors } = edit_loan;
    reject(errors);
  }
  else {
      try {
        const result = update_loan_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
