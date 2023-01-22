import create_page from '../../schemas/ajv_schemas_create/page';
import { insert_page } from '../../dbmanager/db_insert_sl/page.inesrt';


export const postpage = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_page(request.body);
  if (!valid) {
    const { errors } = create_page;
    reject(errors);
  }
  else {
    const result = insert_page(request);
    resolve(result);
  }
});
