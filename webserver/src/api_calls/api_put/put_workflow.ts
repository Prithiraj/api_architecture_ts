import edit_workflow from '../../schemas/ajv_schemas_update/workflow';
import { update_workflow } from '../../dbmanager/db_update_sl/general/workflow.update';
import { update_workflow_admin } from '../../dbmanager/db_update_sl/admin/workflow.update';


export const putworkflow = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflow(request.body);
  if (!valid) {
    const { errors } = edit_workflow;
    reject(errors);
  }
  else {
    try {
      const result = update_workflow(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putworkflow_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflow(request.body);
  if (!valid) {
    const { errors } = edit_workflow;
    reject(errors);
  }
  else {
      try {
        const result = update_workflow_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
