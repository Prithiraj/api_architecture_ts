import edit_element from '../../schemas/ajv_schemas_update/element';
import { update_element } from '../../dbmanager/db_update_sl/general/element.update';
import { update_element_admin } from '../../dbmanager/db_update_sl/admin/element.update';


export const putelement = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_element(request.body);
  if (!valid) {
    const { errors } = edit_element;
    reject(errors);
  }
  else {
    try {
      const result = update_element(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putelement_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_element(request.body);
  if (!valid) {
    const { errors } = edit_element;
    reject(errors);
  }
  else {
      try {
        const result = update_element_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
