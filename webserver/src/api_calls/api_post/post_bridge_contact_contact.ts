import create_bridgeContactContact from '../../schemas/ajv_schemas_create/bridgeContactContact';
import { insert_bridgeContactContact } from '../../dbmanager/db_insert_sl/bridgeContactContact.insert';


export const postbridgeContactContact = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bridgeContactContact(request.body);
  if (!valid) {
    const { errors } = create_bridgeContactContact;
    reject(errors);
  }
  else {
    try {    
      const result = insert_bridgeContactContact(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
