import edit_workflowtoworkflowTargetFilters from '../../schemas/ajv_schemas_update/workflowtoworkflowTargetFilters';
import { update_workflowtoworkflowTargetFilters } from '../../dbmanager/db_update_sl/general/workflowtoworkflowTargetFilters.update';
import { update_workflowtoworkflowTargetFilters_admin } from '../../dbmanager/db_update_sl/admin/workflowtoworkflowTargetFilters.update';


export const putworkflowtoworkflowTargetFilters = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowtoworkflowTargetFilters(request.body);
  if (!valid) {
    const { errors } = edit_workflowtoworkflowTargetFilters;
    reject(errors);
  }
  else {
    try {
      const result = update_workflowtoworkflowTargetFilters(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putworkflowtoworkflowTargetFilters_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowtoworkflowTargetFilters(request.body);
  if (!valid) {
    const { errors } = edit_workflowtoworkflowTargetFilters;
    reject(errors);
  }
  else {
      try {
        const result = update_workflowtoworkflowTargetFilters_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
