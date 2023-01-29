import edit_page from '../../schemas/ajv_schemas_update/page';
import { update_page } from '../../dbmanager/db_update_sl/general/page.update';
import { update_page_admin } from '../../dbmanager/db_update_sl/admin/page.update';


export const putpage = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_page(request.body);
  if (!valid) {
    const { errors } = edit_page;
    reject(errors);
  }
  else {
    try {
      const result = update_page(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putpage_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_page(request.body);
  if (!valid) {
    const { errors } = edit_page;
    reject(errors);
  }
  else {
      try {
        const result = update_page_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
