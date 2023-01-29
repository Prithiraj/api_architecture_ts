import create_engagement from '../../schemas/ajv_schemas_create/engagement';
import { insert_engagement } from '../../dbmanager/db_insert_sl/engagement.insert';


export const postengagement = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_engagement(request.body);
  if (!valid) {
    const { errors } = create_engagement;
    reject(errors);
  }
  else {
    try {
      const result = insert_engagement(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
