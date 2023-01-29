import edit_workflowTemplate from '../../schemas/ajv_schemas_update/workflowTemplate';
import { update_workflowTemplate } from '../../dbmanager/db_update_sl/general/workflowTemplate.update';
import { update_workflowTemplate_admin } from '../../dbmanager/db_update_sl/admin/workflowTemplate.update';


export const putworkflowTemplate = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowTemplate(request.body);
  if (!valid) {
    const { errors } = edit_workflowTemplate;
    reject(errors);
  }
  else {
    try {
      const result = update_workflowTemplate(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putworkflowTemplate_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_workflowTemplate(request.body);
  if (!valid) {
    const { errors } = edit_workflowTemplate;
    reject(errors);
  }
  else {
      try {
        const result = update_workflowTemplate_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
