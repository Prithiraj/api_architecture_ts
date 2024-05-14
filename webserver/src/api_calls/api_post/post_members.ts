import create_members from '../../schemas/ajv_schemas_create/members';
import { insert_members } from '../../dbmanager/db_insert_sl/members.insert';


export const postmembers = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_members(request.body);
  if (!valid) {
    const { errors } = create_members;
    reject(errors);
  }
  else {
    try {
      const result = insert_members(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
