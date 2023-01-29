import create_theme from '../../schemas/ajv_schemas_create/theme';
import { insert_theme } from '../../dbmanager/db_insert_sl/theme.insert';


export const posttheme = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_theme(request.body);
  if (!valid) {
    const { errors } = create_theme;
    reject(errors);
  }
  else {
    try {
      const result = insert_theme(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
