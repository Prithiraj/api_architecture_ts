import create_partner from '../../schemas/ajv_schemas_create/partner';
import { insert_partner } from '../../dbmanager/db_insert_sl/partner.insert';


export const postpartner = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_partner(request.body);
  if (!valid) {
    const { errors } = create_partner;
    reject(errors);
  }
  else {
    try {
      const result = insert_partner(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
