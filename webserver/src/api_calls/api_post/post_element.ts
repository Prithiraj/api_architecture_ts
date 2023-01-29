import create_element from '../../schemas/ajv_schemas_create/element';
import { insert_element } from '../../dbmanager/db_insert_sl/element.insert';


export const postelement = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_element(request.body);
  if (!valid) {
    const { errors } = create_element;
    reject(errors);
  }
  else {
    try {
      const result = insert_element(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
