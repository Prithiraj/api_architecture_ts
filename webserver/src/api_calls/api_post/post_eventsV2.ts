import create_eventsV2 from '../../schemas/ajv_schemas_create/eventsV2';
import { insert_eventsV2 } from '../../dbmanager/db_insert_sl/eventsV2.insert';


export const posteventsV2 = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_eventsV2(request.body);
  if (!valid) {
    const { errors } = create_eventsV2;
    reject(errors);
  }
  else {
    try {
      const result = insert_eventsV2(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
