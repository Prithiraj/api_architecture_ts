import create_eventCategory from '../../schemas/ajv_schemas_create/eventCategory';
import { insert_eventCategory } from '../../dbmanager/db_insert_sl/eventCategory.inesrt';


export const posteventCategory = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_eventCategory(request.body);
  if (!valid) {
    const { errors } = create_eventCategory;
    reject(errors);
  }
  else {
    const result = insert_eventCategory(request);
    resolve(result);
  }
});
