import edit_theme from '../../schemas/ajv_schemas_update/theme';
import { update_theme } from '../../dbmanager/db_update_sl/general/theme.update';
import { update_theme_admin } from '../../dbmanager/db_update_sl/admin/theme.update';


export const puttheme = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_theme(request.body);
  if (!valid) {
    const { errors } = edit_theme;
    reject(errors);
  }
  else {
    try {
      const result = update_theme(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const puttheme_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_theme(request.body);
  if (!valid) {
    const { errors } = edit_theme;
    reject(errors);
  }
  else {
      try {
        const result = update_theme_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
