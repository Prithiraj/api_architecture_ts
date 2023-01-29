import edit_template from '../../schemas/ajv_schemas_update/template';
import { update_template } from '../../dbmanager/db_update_sl/general/template.update';
import { update_template_admin } from '../../dbmanager/db_update_sl/admin/template.update';


export const puttemplate = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_template(request.body);
  if (!valid) {
    const { errors } = edit_template;
    reject(errors);
  }
  else {
    try {
      const result = update_template(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const puttemplate_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_template(request.body);
  if (!valid) {
    const { errors } = edit_template;
    reject(errors);
  }
  else {
      try {
        const result = update_template_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
