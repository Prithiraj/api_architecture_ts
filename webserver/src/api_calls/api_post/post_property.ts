import create_property from '../../schemas/ajv_schemas_create/property';
import { insert_property } from '../../dbmanager/db_insert_sl/property.inesrt';


export const postproperty = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_property(request.body);
  if (!valid) {
    const { errors } = create_property;
    reject(errors);
  }
  else {
    const result = insert_property(request);
    resolve(result);
  }
});
