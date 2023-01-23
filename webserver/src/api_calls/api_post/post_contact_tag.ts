import create_contactTag from '../../schemas/ajv_schemas_create/contactTag';
import { insert_contactTag } from '../../dbmanager/db_insert_sl/contactTag.insert';


export const postcontactTag = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactTag(request.body);
  if (!valid) {
    const { errors } = create_contactTag;
    reject(errors);
  }
  else {
    try {    
      const result = insert_contactTag(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
