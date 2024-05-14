import create_loans from '../../schemas/ajv_schemas_create/loans';
import { insert_loans } from '../../dbmanager/db_insert_sl/loans.insert';


export const postloans = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_loans(request.body);
  if (!valid) {
    const { errors } = create_loans;
    reject(errors);
  }
  else {
    try {
      const result = insert_loans(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
