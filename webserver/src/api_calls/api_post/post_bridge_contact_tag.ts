import create_bridgeContactTag from '../../schemas/ajv_schemas_create/bridgeContactTag';
import { insert_bridgeContactTag } from '../../dbmanager/db_insert_sl/bridgeContactTag.inesrt';


export const postbridgeContactTag = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bridgeContactTag(request.body);
  if (!valid) {
    const { errors } = create_bridgeContactTag;
    reject(errors);
  }
  else {
    const result = insert_bridgeContactTag(request);
    resolve(result);
  }
});
