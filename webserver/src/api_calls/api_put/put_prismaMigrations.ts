import edit_prismaMigrations from '../../schemas/ajv_schemas_update/prismaMigrations';
import { update_prismaMigrations } from '../../dbmanager/db_update_sl/general/prismaMigrations.update';
import { update_prismaMigrations_admin } from '../../dbmanager/db_update_sl/admin/prismaMigrations.update';


export const putprismaMigrations = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_prismaMigrations(request.body);
  if (!valid) {
    const { errors } = edit_prismaMigrations;
    reject(errors);
  }
  else {
    try {
      const result = update_prismaMigrations(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putprismaMigrations_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_prismaMigrations(request.body);
  if (!valid) {
    const { errors } = edit_prismaMigrations;
    reject(errors);
  }
  else {
      try {
        const result = update_prismaMigrations_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
