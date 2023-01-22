import create_persons from '../../schemas/ajv_schemas_create/persons';
import { insert_persons } from '../../dbmanager/db_insert_sl/persons.inesrt';


export const postpersons = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_persons(request.body);
  if (!valid) {
    const { errors } = create_persons;
    reject(errors);
  }
  else {
    const result = insert_persons(request);
    resolve(result);
  }
});
