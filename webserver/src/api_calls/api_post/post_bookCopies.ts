import create_bookCopies from '../../schemas/ajv_schemas_create/bookCopies';
import { insert_bookCopies } from '../../dbmanager/db_insert_sl/bookCopies.insert';


export const postbookCopies = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bookCopies(request.body);
  if (!valid) {
    const { errors } = create_bookCopies;
    reject(errors);
  }
  else {
    try {
      const result = insert_bookCopies(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
