import edit_routing from '../../schemas/ajv_schemas_update/routing';
import { update_routing } from '../../dbmanager/db_update_sl/general/routing.update';
import { update_routing_admin } from '../../dbmanager/db_update_sl/admin/routing.update';


export const putrouting = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_routing(request.body);
  if (!valid) {
    const { errors } = edit_routing;
    reject(errors);
  }
  else {
    try {
      const result = update_routing(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putrouting_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_routing(request.body);
  if (!valid) {
    const { errors } = edit_routing;
    reject(errors);
  }
  else {
      try {
        const result = update_routing_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
