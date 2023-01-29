import edit_templateDependency from '../../schemas/ajv_schemas_update/templateDependency';
import { update_templateDependency } from '../../dbmanager/db_update_sl/general/templateDependency.update';
import { update_templateDependency_admin } from '../../dbmanager/db_update_sl/admin/templateDependency.update';


export const puttemplateDependency = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_templateDependency(request.body);
  if (!valid) {
    const { errors } = edit_templateDependency;
    reject(errors);
  }
  else {
    try {
      const result = update_templateDependency(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const puttemplateDependency_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_templateDependency(request.body);
  if (!valid) {
    const { errors } = edit_templateDependency;
    reject(errors);
  }
  else {
      try {
        const result = update_templateDependency_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
