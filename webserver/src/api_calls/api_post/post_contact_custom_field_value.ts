import create_contactCustomFieldValue from '../../schemas/ajv_schemas_create/contactCustomFieldValue';
import { insert_contactCustomFieldValue } from '../../dbmanager/db_insert_sl/contactCustomFieldValue.inesrt';


export const postcontactCustomFieldValue = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactCustomFieldValue(request.body);
  if (!valid) {
    const { errors } = create_contactCustomFieldValue;
    reject(errors);
  }
  else {
    const result = insert_contactCustomFieldValue(request);
    resolve(result);
  }
});
