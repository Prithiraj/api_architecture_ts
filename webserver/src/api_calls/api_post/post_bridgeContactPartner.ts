import create_bridgeContactPartner from '../../schemas/ajv_schemas_create/bridgeContactPartner';
import { insert_bridgeContactPartner } from '../../dbmanager/db_insert_sl/bridgeContactPartner.insert';


export const postbridgeContactPartner = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bridgeContactPartner(request.body);
  if (!valid) {
    const { errors } = create_bridgeContactPartner;
    reject(errors);
  }
  else {
    try {
      const result = insert_bridgeContactPartner(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
