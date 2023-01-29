import edit_workflowState from '../../schemas/ajv_schemas_update/workflowState';
import { update_workflowState } from '../../dbmanager/db_update_sl/general/workflowState.update';
import { update_workflowState_admin } from '../../dbmanager/db_update_sl/admin/workflowState.update';


export const putworkflowState = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowState(request.body);
  if (!valid) {
    const { errors } = edit_workflowState;
    reject(errors);
  }
  else {
    try {
      const result = update_workflowState(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putworkflowState_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowState(request.body);
  if (!valid) {
    const { errors } = edit_workflowState;
    reject(errors);
  }
  else {
      try {
        const result = update_workflowState_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
