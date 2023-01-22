import create_contactOtherAssociates from '../../schemas/ajv_schemas_create/contactOtherAssociates';
import { insert_contactOtherAssociates } from '../../dbmanager/db_insert_sl/contactOtherAssociates.inesrt';


export const postcontactOtherAssociates = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactOtherAssociates(request.body);
  if (!valid) {
    const { errors } = create_contactOtherAssociates;
    reject(errors);
  }
  else {
    const result = insert_contactOtherAssociates(request);
    resolve(result);
  }
});
