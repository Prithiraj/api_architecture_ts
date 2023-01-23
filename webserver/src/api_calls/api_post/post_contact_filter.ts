import create_contactFilter from '../../schemas/ajv_schemas_create/contactFilter';
import { insert_contactFilter } from '../../dbmanager/db_insert_sl/contactFilter.insert';


export const postcontactFilter = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactFilter(request.body);
  if (!valid) {
    const { errors } = create_contactFilter;
    reject(errors);
  }
  else {
    try {    
      const result = insert_contactFilter(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
