import create_events from '../../schemas/ajv_schemas_create/events';
import { insert_events } from '../../dbmanager/db_insert_sl/events.insert';


export const postevents = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_events(request.body);
  if (!valid) {
    const { errors } = create_events;
    reject(errors);
  }
  else {
    try {
      const result = insert_events(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
