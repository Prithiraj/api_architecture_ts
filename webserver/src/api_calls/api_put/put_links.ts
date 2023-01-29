import edit_links from '../../schemas/ajv_schemas_update/links';
import { update_links } from '../../dbmanager/db_update_sl/general/links.update';
import { update_links_admin } from '../../dbmanager/db_update_sl/admin/links.update';


export const putlinks = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_links(request.body);
  if (!valid) {
    const { errors } = edit_links;
    reject(errors);
  }
  else {
    try {
      const result = update_links(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putlinks_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_links(request.body);
  if (!valid) {
    const { errors } = edit_links;
    reject(errors);
  }
  else {
      try {
        const result = update_links_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
