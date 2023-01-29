import edit_workflowTemplatePermission from '../../schemas/ajv_schemas_update/workflowTemplatePermission';
import { update_workflowTemplatePermission } from '../../dbmanager/db_update_sl/general/workflowTemplatePermission.update';
import { update_workflowTemplatePermission_admin } from '../../dbmanager/db_update_sl/admin/workflowTemplatePermission.update';


export const putworkflowTemplatePermission = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowTemplatePermission(request.body);
  if (!valid) {
    const { errors } = edit_workflowTemplatePermission;
    reject(errors);
  }
  else {
    try {
      const result = update_workflowTemplatePermission(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putworkflowTemplatePermission_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowTemplatePermission(request.body);
  if (!valid) {
    const { errors } = edit_workflowTemplatePermission;
    reject(errors);
  }
  else {
      try {
        const result = update_workflowTemplatePermission_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
