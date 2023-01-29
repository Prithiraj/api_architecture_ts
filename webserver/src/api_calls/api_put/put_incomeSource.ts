import edit_incomeSource from '../../schemas/ajv_schemas_update/incomeSource';
import { update_incomeSource } from '../../dbmanager/db_update_sl/general/incomeSource.update';
import { update_incomeSource_admin } from '../../dbmanager/db_update_sl/admin/incomeSource.update';


export const putincomeSource = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_incomeSource(request.body);
  if (!valid) {
    const { errors } = edit_incomeSource;
    reject(errors);
  }
  else {
    try {
      const result = update_incomeSource(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putincomeSource_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_incomeSource(request.body);
  if (!valid) {
    const { errors } = edit_incomeSource;
    reject(errors);
  }
  else {
      try {
        const result = update_incomeSource_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
