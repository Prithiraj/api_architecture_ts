import create_bridgeContactLoan from '../../schemas/ajv_schemas_create/bridgeContactLoan';
import { insert_bridgeContactLoan } from '../../dbmanager/db_insert_sl/bridgeContactLoan.inesrt';


export const postbridgeContactLoan = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bridgeContactLoan(request.body);
  if (!valid) {
    const { errors } = create_bridgeContactLoan;
    reject(errors);
  }
  else {
    const result = insert_bridgeContactLoan(request);
    resolve(result);
  }
});
