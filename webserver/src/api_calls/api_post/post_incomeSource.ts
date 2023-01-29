import create_incomeSource from '../../schemas/ajv_schemas_create/incomeSource';
import { insert_incomeSource } from '../../dbmanager/db_insert_sl/incomeSource.insert';


export const postincomeSource = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_incomeSource(request.body);
  if (!valid) {
    const { errors } = create_incomeSource;
    reject(errors);
  }
  else {
    try {
      const result = insert_incomeSource(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
