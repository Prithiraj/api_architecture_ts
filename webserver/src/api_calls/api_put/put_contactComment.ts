import edit_contactComment from '../../schemas/ajv_schemas_update/contactComment';
import { update_contactComment } from '../../dbmanager/db_update_sl/general/contactComment.update';
import { update_contactComment_admin } from '../../dbmanager/db_update_sl/admin/contactComment.update';


export const putcontactComment = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactComment(request.body);
  if (!valid) {
    const { errors } = edit_contactComment;
    reject(errors);
  }
  else {
    try {
      const result = update_contactComment(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putcontactComment_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_contactComment(request.body);
  if (!valid) {
    const { errors } = edit_contactComment;
    reject(errors);
  }
  else {
      try {
        const result = update_contactComment_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
