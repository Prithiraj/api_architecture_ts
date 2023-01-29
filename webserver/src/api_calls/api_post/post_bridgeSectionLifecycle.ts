import create_bridgeSectionLifecycle from '../../schemas/ajv_schemas_create/bridgeSectionLifecycle';
import { insert_bridgeSectionLifecycle } from '../../dbmanager/db_insert_sl/bridgeSectionLifecycle.insert';


export const postbridgeSectionLifecycle = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bridgeSectionLifecycle(request.body);
  if (!valid) {
    const { errors } = create_bridgeSectionLifecycle;
    reject(errors);
  }
  else {
    try {
      const result = insert_bridgeSectionLifecycle(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
