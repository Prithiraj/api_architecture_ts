import create_pageVersion from '../../schemas/ajv_schemas_create/pageVersion';
import { insert_pageVersion } from '../../dbmanager/db_insert_sl/pageVersion.inesrt';


export const postpageVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_pageVersion(request.body);
  if (!valid) {
    const { errors } = create_pageVersion;
    reject(errors);
  }
  else {
    const result = insert_pageVersion(request);
    resolve(result);
  }
});
