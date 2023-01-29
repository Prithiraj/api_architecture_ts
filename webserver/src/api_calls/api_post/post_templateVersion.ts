import create_templateVersion from '../../schemas/ajv_schemas_create/templateVersion';
import { insert_templateVersion } from '../../dbmanager/db_insert_sl/templateVersion.insert';


export const posttemplateVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_templateVersion(request.body);
  if (!valid) {
    const { errors } = create_templateVersion;
    reject(errors);
  }
  else {
    try {
      const result = insert_templateVersion(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
