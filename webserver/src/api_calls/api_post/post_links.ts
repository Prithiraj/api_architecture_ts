import create_links from '../../schemas/ajv_schemas_create/links';
import { insert_links } from '../../dbmanager/db_insert_sl/links.inesrt';


export const postlinks = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_links(request.body);
  if (!valid) {
    const { errors } = create_links;
    reject(errors);
  }
  else {
    const result = insert_links(request);
    resolve(result);
  }
});
