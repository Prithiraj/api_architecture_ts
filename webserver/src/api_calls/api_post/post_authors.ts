import create_authors from '../../schemas/ajv_schemas_create/authors';
import { insert_authors } from '../../dbmanager/db_insert_sl/authors.insert';


export const postauthors = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_authors(request.body);
  if (!valid) {
    const { errors } = create_authors;
    reject(errors);
  }
  else {
    try {
      const result = insert_authors(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
