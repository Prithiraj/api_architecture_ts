import create_contactComment from '../../schemas/ajv_schemas_create/contactComment';
import { insert_contactComment } from '../../dbmanager/db_insert_sl/contactComment.insert';


export const postcontactComment = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactComment(request.body);
  if (!valid) {
    const { errors } = create_contactComment;
    reject(errors);
  }
  else {
    try {    
      const result = insert_contactComment(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
