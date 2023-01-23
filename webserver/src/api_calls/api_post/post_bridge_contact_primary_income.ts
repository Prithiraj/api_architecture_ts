import create_bridgeContactPrimaryIncome from '../../schemas/ajv_schemas_create/bridgeContactPrimaryIncome';
import { insert_bridgeContactPrimaryIncome } from '../../dbmanager/db_insert_sl/bridgeContactPrimaryIncome.insert';


export const postbridgeContactPrimaryIncome = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_bridgeContactPrimaryIncome(request.body);
  if (!valid) {
    const { errors } = create_bridgeContactPrimaryIncome;
    reject(errors);
  }
  else {
    try {    
      const result = insert_bridgeContactPrimaryIncome(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
