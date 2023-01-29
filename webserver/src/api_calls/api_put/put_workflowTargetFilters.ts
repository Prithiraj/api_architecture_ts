import edit_workflowTargetFilters from '../../schemas/ajv_schemas_update/workflowTargetFilters';
import { update_workflowTargetFilters } from '../../dbmanager/db_update_sl/general/workflowTargetFilters.update';
import { update_workflowTargetFilters_admin } from '../../dbmanager/db_update_sl/admin/workflowTargetFilters.update';


export const putworkflowTargetFilters = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowTargetFilters(request.body);
  if (!valid) {
    const { errors } = edit_workflowTargetFilters;
    reject(errors);
  }
  else {
    try {
      const result = update_workflowTargetFilters(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putworkflowTargetFilters_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowTargetFilters(request.body);
  if (!valid) {
    const { errors } = edit_workflowTargetFilters;
    reject(errors);
  }
  else {
      try {
        const result = update_workflowTargetFilters_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
