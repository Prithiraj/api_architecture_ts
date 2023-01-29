import edit_bridgeSectionLifecycle from '../../schemas/ajv_schemas_update/bridgeSectionLifecycle';
import { update_bridgeSectionLifecycle } from '../../dbmanager/db_update_sl/general/bridgeSectionLifecycle.update';
import { update_bridgeSectionLifecycle_admin } from '../../dbmanager/db_update_sl/admin/bridgeSectionLifecycle.update';


export const putbridgeSectionLifecycle = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeSectionLifecycle(request.body);
  if (!valid) {
    const { errors } = edit_bridgeSectionLifecycle;
    reject(errors);
  }
  else {
    try {
      const result = update_bridgeSectionLifecycle(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbridgeSectionLifecycle_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeSectionLifecycle(request.body);
  if (!valid) {
    const { errors } = edit_bridgeSectionLifecycle;
    reject(errors);
  }
  else {
      try {
        const result = update_bridgeSectionLifecycle_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
