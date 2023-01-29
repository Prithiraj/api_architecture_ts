import edit_property from '../../schemas/ajv_schemas_update/property';
import { update_property } from '../../dbmanager/db_update_sl/general/property.update';
import { update_property_admin } from '../../dbmanager/db_update_sl/admin/property.update';


export const putproperty = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_property(request.body);
  if (!valid) {
    const { errors } = edit_property;
    reject(errors);
  }
  else {
    try {
      const result = update_property(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putproperty_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_property(request.body);
  if (!valid) {
    const { errors } = edit_property;
    reject(errors);
  }
  else {
      try {
        const result = update_property_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
