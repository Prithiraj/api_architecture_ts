import edit_persons from '../../schemas/ajv_schemas_update/persons';
import { update_persons } from '../../dbmanager/db_update_sl/general/persons.update';
import { update_persons_admin } from '../../dbmanager/db_update_sl/admin/persons.update';


export const putpersons = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_persons(request.body);
  if (!valid) {
    const { errors } = edit_persons;
    reject(errors);
  }
  else {
    try {
      const result = update_persons(request);
      resolve(result);    
    }
    catch (err) {
      reject(err);
    }
  }
});

export const putpersons_admin = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = edit_persons(request.body);
  if (!valid) {
    const { errors } = edit_persons;
    reject(errors);
  }
  else {
      try {
        const result = update_persons_admin(request);
        resolve(result);
      }
      catch (err) {
        reject(err);
      }
  }
  });
