import create_contact from '../../schemas/ajv_schemas_create/contact';
import { insert_contact } from '../../dbmanager/db_insert_sl/contact.insert';


export const postcontact = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contact(request.body);
  if (!valid) {
    const { errors } = create_contact;
    reject(errors);
  }
  else {
    try {    
      const result = insert_contact(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
