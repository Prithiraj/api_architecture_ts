import create_template from '../../schemas/ajv_schemas_create/template';
import { insert_template } from '../../dbmanager/db_insert_sl/template.insert';


export const posttemplate = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_template(request.body);
  if (!valid) {
    const { errors } = create_template;
    reject(errors);
  }
  else {
    try {
      const result = insert_template(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
