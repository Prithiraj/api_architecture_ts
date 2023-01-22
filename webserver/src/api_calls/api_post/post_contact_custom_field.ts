import create_contactCustomField from '../../schemas/ajv_schemas_create/contactCustomField';
import { insert_contactCustomField } from '../../dbmanager/db_insert_sl/contactCustomField.inesrt';


export const postcontactCustomField = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactCustomField(request.body);
  if (!valid) {
    const { errors } = create_contactCustomField;
    reject(errors);
  }
  else {
    const result = insert_contactCustomField(request);
    resolve(result);
  }
});
