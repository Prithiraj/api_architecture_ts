import create_eventType from '../../schemas/ajv_schemas_create/eventType';
import { insert_eventType } from '../../dbmanager/db_insert_sl/eventType.inesrt';


export const posteventType = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_eventType(request.body);
  if (!valid) {
    const { errors } = create_eventType;
    reject(errors);
  }
  else {
    const result = insert_eventType(request);
    resolve(result);
  }
});
