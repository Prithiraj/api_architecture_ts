import create_bookShelves from '../../schemas/ajv_schemas_create/bookShelves';
import { insert_bookShelves } from '../../dbmanager/db_insert_sl/bookShelves.insert';


export const postbookShelves = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bookShelves(request.body);
  if (!valid) {
    const { errors } = create_bookShelves;
    reject(errors);
  }
  else {
    try {
      const result = insert_bookShelves(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
