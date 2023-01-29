import edit_bridgeContactTag from '../../schemas/ajv_schemas_update/bridgeContactTag';
import { update_bridgeContactTag } from '../../dbmanager/db_update_sl/general/bridgeContactTag.update';
import { update_bridgeContactTag_admin } from '../../dbmanager/db_update_sl/admin/bridgeContactTag.update';


export const putbridgeContactTag = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactTag(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactTag;
    reject(errors);
  }
  else {
    try {
      const result = update_bridgeContactTag(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putbridgeContactTag_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_bridgeContactTag(request.body);
  if (!valid) {
    const { errors } = edit_bridgeContactTag;
    reject(errors);
  }
  else {
      try {
        const result = update_bridgeContactTag_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
