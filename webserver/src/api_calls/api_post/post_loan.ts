import create_loan from '../../schemas/ajv_schemas_create/loan';
import { insert_loan } from '../../dbmanager/db_insert_sl/loan.inesrt';


export const postloan = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_loan(request.body);
  if (!valid) {
    const { errors } = create_loan;
    reject(errors);
  }
  else {
    const result = insert_loan(request);
    resolve(result);
  }
});
